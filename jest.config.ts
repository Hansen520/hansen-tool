import { Config } from '@jest/types';

const config: Config.InitialOptions = {
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'], // 匹配测试文件
    preset: 'ts-jest', // 使用ts-jest
    testEnvironment: 'node', // 或者 'jsdom' 如果你正在测试浏览器代码
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/release/', '/script/', '/doc/'],
}
export default config;