import { Config } from "@jest/types";
import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "~frontend/tsconfig.json";

const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  extensionsToTreatAsEsm: [".tsx", ".ts"],
  preset: "ts-jest",
  snapshotSerializers: ["@emotion/jest/serializer"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: process.cwd(),
  }),
};
export default config;
