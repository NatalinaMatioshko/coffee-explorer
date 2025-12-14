// src/components/Menu.tsx
import React from "react";
import { Link } from "react-router-dom";

interface MenuProps {
  isMobile?: boolean;
  isFooter?: boolean;
  onItemClick?: () => void;
}

const menuItems = [
  { name: "Menu", path: "/menu" },
  { name: "Beans", path: "/beans" },
  { name: "Courses", path: "/courses" },
  { name: "Contacts", path: "/contacts" },
];

const Menu: React.FC<MenuProps> = ({
  isMobile = false,
  isFooter = false,
  onItemClick,
}) => {
  // Footer Menu
  if (isFooter) {
    return (
      <nav>
        <ul className="flex flex-col gap-2 text-base tracking-widest font-light uppercase">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="hover:text-orange-200 transition-colors duration-300 relative group inline-block"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-200 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  // Desktop Menu

  if (!isMobile) {
    return (
      <nav className="hidden md:block">
        <ul className="flex gap-8 lg:gap-12 text-base lg:text-lg xl:text-xl tracking-widest font-light uppercase">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="cursor-pointer hover:text-[#ecc29c] transition-colors duration-300 relative group"
            >
              <Link to={item.path}>
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#ecc29c] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  // Mobile Menu
  return (
    <nav className="py-4">
      {menuItems.map((item, index) => (
        <Link
          key={item.name}
          to={item.path}
          style={{ animationDelay: `${index * 0.1}s` }}
          className="flex items-center justify-between py-4 px-6 text-[#4f2d20] hover:bg-[#f9f3e9] transition-colors animate-slide-in-right"
          onClick={onItemClick}
        >
          <span className="text-lg font-medium uppercase tracking-wide">
            {item.name}
          </span>
          <svg
            className="w-5 h-5 text-[#7c4936]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
