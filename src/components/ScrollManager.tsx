// import { useEffect, useLayoutEffect, useRef } from "react";
// import { useLocation, useNavigationType } from "react-router-dom";

// export default function ScrollManager() {
//   const { pathname } = useLocation();
//   const navType = useNavigationType();
//   const positions = useRef(new Map<string, number>());

//   useEffect(() => {
//     const savedPositions = positions.current;
//     return () => {
//       savedPositions.set(pathname, window.scrollY);
//     };
//   }, [pathname]);

//   useLayoutEffect(() => {
//     if (navType === "POP") {
//       const y = positions.current.get(pathname) ?? 0;
//       window.scrollTo(0, y);
//       return;
//     }

//     window.scrollTo(0, 0);
//   }, [pathname, navType]);

//   return null;
// }
