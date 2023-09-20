/*
 * @Date: 2023-09-20 10:16:06
 * @Description: description
 */
import path from 'path';
import ts from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const packagesDir = path.resolve(__dirname, 'src/index');
const name = path.basename(packagesDir);


const packageFormats = process.env.FORMATS.split(',');

// 稍后打包所有文件的时候 可能不会有packageFormats
const packageConfigs = packageFormats || pkg.buildOptions.formats;

const outputConfig = {
  'esm-bundler': {
    file: path.resolve(`release/${name}.esm-bundler.js`),
    format: 'es',
  },
  cjs: {
    file: path.resolve(`release/${name}.js`),
    format: 'cjs',
  },
  global: {
    file: path.resolve(`release/${name}.global.js`),
    format: 'iife',
  },
};
function createConfig(format, output) {
  // 添加sourcemap
  // output.sourcemap = sourcemap;
  output.exports = 'named';
  let external = []; // 外部模块 哪些模块不需要打包
  if (format === 'global') {
    // output.name = pkg.buildOptions.name;
  } else {
    // 忽略一些文件
    // external = [...Object.keys(pkg.dependencies)];
  }
  return {
    // 导出rollup的配置
    // input: resolve('src/index.ts'),
    input: path.resolve('src/index.ts'),
    output,
    external,
    plugins: [json(), ts(), commonjs(), nodeResolve()],
  };
}

// 返回数组 会进行依次的打包
export default packageConfigs.map((format) =>
  createConfig(format, outputConfig[format])
);
