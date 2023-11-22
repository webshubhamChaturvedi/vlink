import { useState, useEffect } from "react";

const useResponsive = () => {
  const [state, setState] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 767;
      const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1199;
      const isDesktop = window.innerWidth > 1200;

      setState({ isMobile, isTablet, isDesktop });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return state;
};

export default useResponsive;
