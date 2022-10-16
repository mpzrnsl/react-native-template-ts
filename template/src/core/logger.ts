/**
 * ProjectName
 *
 * Author: Phia Nasol
 *
 */

import { InteractionManager } from "react-native";

import FileSystem from "react-native-fs";
import { consoleTransport, fileAsyncTransport, logger } from "react-native-logs";

import Env from "./env";

const severity = Env.tryGet("LOG_SEVERITY", "info");

const getTransports = (environment: string) => {
  if (environment === "production") {
    return [fileAsyncTransport];
  }

  return [consoleTransport, fileAsyncTransport];
};

const config = {
  transport: getTransports(Env.get("ENV")),
  transportOptions: {
    FS: FileSystem,
    colors: {
      debug: "grey",
      info: "greenBright",
      warn: "yellowBright",
      error: "redBright"
    }
  },
  async: true,
  asyncFunc: InteractionManager.runAfterInteractions,
  dateFormat: "utc",
  printLevel: true,
  printDate: true,
  severity
};

export default logger.createLogger<"debug" | "info" | "warn" | "error">(config);
