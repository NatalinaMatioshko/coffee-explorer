import React from "react";
import { NavLink } from "react-router-dom";

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
  { name: "Favorites", path: "/favorites" },
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
        <ul className="flex flex-col gap-2 text-sm tracking-widest font-light uppercase">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  [
                    "transition-colors duration-300 relative group inline-block",
                    "hover:text-orange-200",
                    isActive ? "text-orange-200" : "",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.name}</span>
                    <span
                      className={[
                        "absolute -bottom-1 left-0 h-px bg-orange-200 transition-all duration-300",
                        "group-hover:w-full",
                        isActive ? "w-full" : "w-0",
                      ].join(" ")}
                    />
                  </>
                )}
              </NavLink>
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
        <ul className="flex gap-6 lg:gap-6 text-sm lg:text-sm xl:text-base tracking-widest font-light uppercase">
          {menuItems.map((item) => (
            <li key={item.name} className="relative">
              <NavLink
                to={item.path}
                className="cursor-pointer transition-colors duration-300 relative group inline-block"
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={[
                        "transition-colors duration-300",
                        "group-hover:text-[#ecc29c]",
                        isActive ? "text-[#ecc29c]" : "",
                      ].join(" ")}
                    >
                      {item.name}
                    </span>
                    <span
                      className={[
                        "absolute -bottom-1 left-0 h-px bg-[#ecc29c] transition-all duration-300",
                        "group-hover:w-full",
                        isActive ? "w-full" : "w-0",
                      ].join(" ")}
                    />
                  </>
                )}
              </NavLink>
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
        <NavLink
          key={item.name}
          to={item.path}
          style={{ animationDelay: `${index * 0.1}s` }}
          className={({ isActive }) =>
            [
              "flex items-center justify-between py-4 px-6 transition-colors animate-slide-in-right",
              "text-[#4f2d20] hover:bg-[#f9f3e9]",
              isActive ? "bg-[#f9f3e9]" : "",
            ].join(" ")
          }
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
        </NavLink>
      ))}
    </nav>
  );
};

export default Menu;
