"use client";
import { useState, useEffect } from "react";

const useScrollToElement = (query) => {
  const [isScrollToElement, setIsScrollToElement] = useState(false);
  const [isOverHeader, setIsOverHeader] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [atPositionElement, setAtPositionElement] = useState(0);

  const scrollToElement = (query) => {
    const timeout = setTimeout(() => {
      const elementDom = document.querySelector(query);
      if (elementDom) {
        window.scrollTo({
          top: elementDom.offsetTop,
          behavior: "smooth",
        });
      }
    }, 100);
    setScrollTimeout(timeout);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionDom = query ? document.querySelector(query) : { offsetTop: 0 };
      const scrollPosition = window.pageYOffset;
      if(scrollPosition > 88) {
        setIsOverHeader(true)
      } else {
        setIsOverHeader(false)
      }
      if (sectionDom) {
        const SectionTop = sectionDom.offsetTop;
        if(scrollPosition === SectionTop ) {
          setAtPositionElement(true)
        } else {
          setAtPositionElement(false)
        }
        if (scrollPosition > SectionTop) {
          setIsScrollToElement(true);
        } else {
          setIsScrollToElement(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return { isScrollToElement, scrollToElement, isOverHeader, atPositionElement };
};

export default useScrollToElement;
