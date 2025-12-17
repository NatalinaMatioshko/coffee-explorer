import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navType = useNavigationType(); // "PUSH" | "POP" | "REPLACE"

  useEffect(() => {
    if (navType === "POP") return; // Back/Forward -> зберігаємо scroll
    window.scrollTo(0, 0);
  }, [pathname, navType]);

  return null;
}
