import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  extensionsToTreatAsEsm: [".tsx", ".ts"],
  preset: "ts-jest",
  snapshotSerializers: ["@emotion/jest/serializer"],
};
export default config;
