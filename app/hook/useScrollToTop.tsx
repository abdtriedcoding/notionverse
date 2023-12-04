import { useState, useEffect, useCallback } from "react";

const useScrollToTop = (threshold = 100) => {
  const [showTopButton, setShowTopButton] = useState(false);

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY;
    setShowTopButton(scrolled > threshold);
  }, [threshold]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowTopButton(!entry.isIntersecting);
      },
      { threshold: [0, 1] }
    );

    observer.observe(document.querySelector(".observer-element")!);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [handleScroll]);

  const handleClickTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return { showTopButton, handleClickTop };
};

export default useScrollToTop;
