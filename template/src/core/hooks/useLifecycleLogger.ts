/**
 * ProjectName
 *
 * Author: Phia Nasol
 *
 */

import { useEffect } from "react";

import Logger from "../logger";
import useEffectOnce from "./useEffectOnce";
import useLifecycleInfo from "./useLifecycleInfo";

const LoggerExtensionName = "LIFECYCLE";

const useEffectLogger = (name: string, ...rest: any[]) => {
  const logger = Logger.extend(LoggerExtensionName);

  const { isFirstMount, mountCount } = useLifecycleInfo();

  useEffectOnce(() => {
    logger.debug(`${name} mounted.`, ...rest);

    return () => logger.debug(`${name} unmounted.`);
  });

  useEffect(() => {
    if (!isFirstMount) {
      logger.debug(`${name} updated ${mountCount} time(s)`, ...rest);
    }
  });
};

export default useEffectLogger;
