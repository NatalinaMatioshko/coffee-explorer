import logo from "../assets/svg/logo.svg";
import searchIcon from "../assets/svg/search.svg";
import { useState } from "react";

const menuList = ["Menu", "Beans", "Courses", "Partners"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full flex justify-between items-center py-6 px-4 md:px-8 text-white z-50 bg-[#4f2d20] md:bg-black/10 md:backdrop-blur-sm">
        {/* ЛІВА ЧАСТИНА: Burger (mobile) + Логотип */}
        <div className="flex items-center gap-4">
          {/* Burger Menu - тільки на mobile/tablet */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Логотип */}
          <a href="/index.html" className="hover:opacity-80 transition-opacity">
            <img
              src={logo}
              className="w-32 md:w-40 h-auto object-contain"
              alt="Coffee Explorer"
            />
          </a>
        </div>

        {/* ЦЕНТРАЛЬНА ЧАСТИНА: Меню (тільки desktop) */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 md:gap-5 lg:gap-10  xl:text-xl text-base tracking-widest font-light uppercase">
            {menuList.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-orange-200 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-200 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* ПРАВА ЧАСТИНА: Пошук + Кошик */}
        <div className="flex items-center gap-2 md:gap-4">
       
          <div className="hidden lg:flex items-center border border-white rounded-full px-4 py-2 w-64 hover:bg-white/10 transition-colors group">
            <img src={searchIcon} className="w-4 h-4" alt="Search" />
            <input
              type="text"
              placeholder="Search ..."
              className="bg-transparent border-none outline-none text-sm ml-3 text-white placeholder-gray-300 w-full"
            />
          </div>

          {/* Іконка пошуку для mobile/tablet */}
          <button className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-colors">
            <img src={searchIcon} className="w-5 h-5" alt="Search" />
          </button>

          {/* Кошик */}
          <div className="flex items-center justify-center w-10 h-10 border border-white rounded-full cursor-pointer hover:bg-white text-white hover:text-amber-950 transition-all duration-300 group">
            <svg
              className="w-5 h-5 stroke-[1.5] group-hover:stroke-[2.5] transition-all duration-300"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.9038 10.7766L26.5321 24.5568C26.2139 27.753 23.5248 30.1877 20.3128 30.1877H10.3747C7.16267 30.1877 4.47361 27.753 4.15543 24.5568L2.78365 10.7766M15.3438 18.7694V23.3367M21.0529 18.7694V23.3367M9.63462 18.7694V23.3367M11.9183 0.500137L8.49286 9.63476M0.5 10.7766H30.1875M18.7692 0.500151L22.1947 9.63477"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-amber-50 shadow-2xl animate-slide-in-left">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-amber-200 bg-amber-700">
              <img src={logo} alt="Coffee Explorer" className="h-8" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Search in Menu */}
            <div className="p-4 border-b border-amber-200">
              <div className="relative flex items-center border border-amber-300 rounded-full px-4 py-2 bg-white">
                <img
                  src={searchIcon}
                  className="w-4 h-4 opacity-50"
                  alt="Search"
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none outline-none text-sm ml-3 text-gray-800 placeholder-gray-400 w-full"
                />
              </div>
            </div>

            {/* Menu Items */}
            <nav className="py-4">
              {menuList.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className="flex items-center justify-between py-4 px-6 text-amber-900 hover:bg-amber-100 transition-colors animate-slide-in-right"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-lg font-medium uppercase tracking-wide">
                    {item}
                  </span>
                  <svg
                    className="w-5 h-5 text-amber-600"
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
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
