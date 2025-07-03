import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      if (pageHeight - scrollPosition < 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-darkTheme dark:bg-white text-white dark:text-darkTheme p-3 rounded-full shadow-lg cursor-pointer transition"
        data-aos = "fade-left"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollBtn;
