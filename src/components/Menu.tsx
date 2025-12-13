// const Menu = () => {
//   const menuList = ["Menu", "Beans", "Courses", "Partners"];
//   return (
//     <>
//       {/* ЦЕНТРАЛЬНА ЧАСТИНА: Меню (тільки desktop) */}
//       <nav className="hidden md:block">
//         <ul className="flex gap-6 md:gap-5 lg:gap-10  xl:text-xl text-base tracking-widest font-light uppercase">
//           {menuList.map((item, index) => (
//             <li
//               key={index}
//               className="cursor-pointer hover:text-orange-200 transition-colors duration-300 relative group"
//             >
//               {item}
//               <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-200 transition-all duration-300 group-hover:w-full"></span>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <div className="py-4">
//         {menuList.map((item, index) => (
//           <a
//             key={index}
//             href={`#${item.toLowerCase()}`}
//             style={{ animationDelay: `${index * 0.1}s` }}
//             className="flex items-center justify-between py-4 px-6 text-amber-900 hover:bg-amber-100 transition-colors animate-slide-in-right"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             <span className="text-lg font-medium uppercase tracking-wide">
//               {item}
//             </span>
//             <svg
//               className="w-5 h-5 text-amber-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </a>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Menu;
