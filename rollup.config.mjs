/*
 * @Date: 2023-09-20 10:16:06
 * @Description: rollup.config.js 的配置项
 */
import path from "node:path";
import ts from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs"; // 将CommonJS模块转换为ESM
import terser from '@rollup/plugin-terser';
import pkg from './package.json' with { type: 'json' };

const name = "index";
const packageFormats = (process.env.FORMATS || pkg.buildOptions.formats).split("@");

const outputConfig = {
  esm: {
    file: path.resolve(`release/${name}.esm.js`),
    format: "es",
  },
  cjs: {
    file: path.resolve(`release/${name}.cjs`),
    format: "cjs",
  },
  global: {
    file: path.resolve(`release/${name}.global.js`),
    format: "iife",
  },
};
function createConfig(format, output) {
  if (!output) {
    throw new Error(`Unsupported build format: ${format}`);
  }

  // 添加sourcemap
  output = { ...output, sourcemap: true, exports: "named" };
  let external = []; // 外部模块 哪些模块不需要打包
  if (format === "global") {
    output.name = "HanTool";
  } else {
    // 忽略一些文件
    // external = [...Object.keys(pkg.dependencies)];
  }
  return {
    // 导出rollup的配置
    input: path.resolve("src/index.ts"),
    output,
    external,
    plugins: [
      json(),
      ts({
        tsconfig: "tsconfig.json",
        compilerOptions: {
          allowImportingTsExtensions: false,
        },
      }),
      resolve(),
      commonjs(),
      terser(),
    ],
  };
}

// 返回数组 会进行依次的打包
export default packageFormats.map((format) => createConfig(format, outputConfig[format]));
