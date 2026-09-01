import type { Config } from "jest";

const config: Config = {
  cacheDirectory: "<rootDir>/node_modules/.cache/jest",
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["/node_modules/", "/release/", "/script/", "/doc/"],
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {
      tsconfig: {
        module: "CommonJS",
        moduleResolution: "Node",
      },
    }],
  },
};

export default config;
