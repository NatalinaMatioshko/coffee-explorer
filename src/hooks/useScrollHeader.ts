// src/hooks/useScrollHeader.ts
import { useEffect, useState, useRef } from "react";

export const useScrollHeader = (targetSelector: string) => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (!targetSelector) return;

    const targetSection = document.querySelector(targetSelector);
    if (!targetSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > lastScrollY.current;
        lastScrollY.current = currentScrollY;

        if (!entry.isIntersecting && scrollingDown) {
          // Виходимо з першої секції при скролі вниз - ховаємо хедер
          setIsVisible(false);
        } else if (entry.isIntersecting && !scrollingDown) {
          // Повертаємося до першої секції при скролі вгору - показуємо хедер
          setIsVisible(true);
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "0px 0px -90% 0px", // Спрацює коли виходимо з секції
      }
    );

    observer.observe(targetSection);

    return () => observer.disconnect();
  }, [targetSelector]);

  return isVisible;
};
