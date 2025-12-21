import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import MobileMenu from "../components/MobileMenu";
import SearchBar from "../components/SearchBar";
import AuthModal from "../components/AuthModal";
import { useAuthStore } from "../store/useAuthStore";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { isAuth, user, logout } = useAuthStore();
  const location = useLocation();

  const darkHeaderRoutes = [
    "/menu",
    "/beans",
    "/courses",
    "/contacts",
    "/product",
  ];
  const isDark = darkHeaderRoutes.some((r) => location.pathname.startsWith(r));
  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center py-2 px-4 md:px-8 text-[#f9f3e9]
    transition-colors duration-300
    ${isDark ? "bg-[#4f2d20]" : "bg-transparent"}
  `}
      >
        {/* Контейнер з обмеженою шириною */}
        <div className="max-w-360 mx-auto flex justify-between items-center gap-6 lg:gap-12">
          {/* ЛІВА ЧАСТИНА: Burger + Логотип */}
          <div className="flex items-center gap-4">
            {/* Burger Button - тільки mobile */}
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

            <Logo />
          </div>

          {/* ЦЕНТР: Desktop Menu */}
          <Menu />

          {/* ПРАВА ЧАСТИНА: Пошук + Іконки */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Пошук */}
            <SearchBar variant="desktop" />

            {isAuth ? (
              <div className="flex items-center gap-3 text-[#f9f3e9]">
                <span className="text-sm">Hi, {user?.name}</span>
                <button
                  onClick={logout}
                  className="text-xs underline hover:opacity-80"
                >
                  Logout
                </button>
              </div>
            ) : null}

            {/* User Profile Icon */}
            <button
              onClick={() => setIsAuthOpen(true)} // <--- 3. Відкриваємо модалку при кліку
              className="flex items-center justify-center w-10 h-10 border border-white rounded-full hover:bg-white hover:text-[#4f2d20] transition-all duration-300 group"
              aria-label="User Profile"
            >
              <FaUserAlt />
            </button>
            {/* <SearchBar variant="mobile" /> */}

            {/* Кошик */}
            <button className="flex items-center justify-center w-10 h-10 border border-white rounded-full hover:bg-white hover:text-[#4f2d20] transition-all duration-300 group">
              <CiShoppingBasket className="w-5 h-5 stroke-1 group-hover:stroke-[1.5] transition-all duration-300" />
            </button>

            {/* Профіль */}
            {/* <button className="flex items-center justify-center w-10 h-10 border border-white rounded-full hover:bg-white hover:text-[#4f2d20] active:bg-white active:text-[#4f2d20] transition-all duration-300 ">
              <FaUserAlt />
            </button> */}
          </div>
        </div>
        {/* Mobile Menu */}
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </header>

      {/* 4. Рендеримо модалку (можна тут, або через Portal, але так простіше) */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default Header;
