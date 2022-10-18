/**
 * ProjectName
 *
 * Author: Phia Nasol
 *
 */

import { useRef } from "react";

const useLifecycleInfo = () => {
  const isFirstMount = useRef(true);
  const mountCount = useRef(0);

  if (isFirstMount.current) {
    isFirstMount.current = false;

    return { isFirstMount: true, mountCount: ++mountCount.current };
  }

  return { isFirstMount: isFirstMount.current, mountCount: ++mountCount.current };
};

export default useLifecycleInfo;
