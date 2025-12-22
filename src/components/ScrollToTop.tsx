import React, { useState, useEffect } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Показувати кнопку коли проскролили вниз
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Функція прокрутки наверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 
                   bg-[#4f2d20] text-[#f9f3e9] 
                   w-12 h-12 rounded-full 
                   flex items-center justify-center
                   shadow-lg hover:shadow-xl
                   hover:bg-[#7c4936]
                   transition-all duration-300
                   transform hover:scale-110
                   animate-bounce"
          aria-label="Scroll to top"
        >
          <IoIosArrowRoundUp className="text-3xl" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
