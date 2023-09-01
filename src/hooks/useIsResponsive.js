"use client";
import { useState, useEffect } from "react";
import useWindowSize from "./useWindowSize";
const useIsResponsive = () => {
  const windowSize = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mobileBreakpoint = 767;
    const tabletBreakpoint = 1024;
    const checkResponsive = () => {
      const { width } = windowSize;
      // Check both window size and user agent for isMobile
      const isMobileUserAgent =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      setIsMobile(width <= mobileBreakpoint || isMobileUserAgent);
      setIsTablet(width > mobileBreakpoint && width <= tabletBreakpoint);
      setIsDesktop(width > tabletBreakpoint);
    };
    window.addEventListener("resize", checkResponsive);
    checkResponsive();
    return () => window.removeEventListener("resize", checkResponsive);
  }, [windowSize.width]);

  return { isMobile, isTablet, isDesktop };
};

export default useIsResponsive;
