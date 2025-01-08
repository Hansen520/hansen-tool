/*
 * @Date: 2023-09-20 10:16:06
 * @Description: rollup.config.js 的配置项
 */
import path, { dirname } from "node:path"
import { fileURLToPath } from "node:url"
import ts from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs"; // 将CommonJS模块转换为ESM
import terser from '@rollup/plugin-terser';
import pkg from './package.json' with { type: 'json' };

const __filename = fileURLToPath(import.meta.url); // 获取当前文件的绝对路径
const packagesDir = path.resolve(dirname(__filename), "src/index");
const name = path.basename(packagesDir);

const packageFormats = process.env.FORMATS.split("@"); // 获取环境变量
// 稍后打包所有文件的时候 可能不会有packageFormats
const packageConfigs = packageFormats || [pkg.buildOptions.formats]; // pkg

const outputConfig = {
  esm: {
    file: path.resolve(`release/${name}.esm.js`),
    format: "es",
  },
  global: {
    file: path.resolve(`release/${name}.global.js`),
    format: "iife",
  },
};
function createConfig(format, output) {
  // 添加sourcemap
  output.sourcemap = true;
  output.exports = "named";
  let external = []; // 外部模块 哪些模块不需要打包
  if (format === "global") {
    output.name = "window.HanTool";
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
      }),
      commonjs(),
      terser(),
      resolve(),
    ],
  };
}

// 返回数组 会进行依次的打包
export default packageConfigs.map((format) => createConfig(format, outputConfig[format]));
