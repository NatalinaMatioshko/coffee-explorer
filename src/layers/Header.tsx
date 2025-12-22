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
import { useScrollHeader } from "../hooks/useScrollHeader";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { isAuth, user, logout } = useAuthStore();
  const location = useLocation();

  const isVisible = useScrollHeader(
    location.pathname === "/" ? ".section-1" : ""
  );

  const darkHeaderRoutes = [
    "/menu",
    "/beans",
    "/contacts",
    "/product",
    "/favorites",
    "*",
  ];
  const isDark = darkHeaderRoutes.some((r) => location.pathname.startsWith(r));

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center py-2 px-4 md:px-8 text-[#f9f3e9]
    transition-all duration-300
    ${isDark ? "bg-[#4f2d20]" : "bg-transparent"}
    ${isVisible ? "translate-y-0" : "-translate-y-full"}
  `}
      >
        <div className="w-full max-w-360 mx-auto flex justify-between items-center gap-6 lg:gap-12">
          {/* ? */}
          <div className="flex items-center gap-4">
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

          <Menu />

          <div className="flex items-center gap-2 md:gap-4">
            <SearchBar variant="desktop" />

            {isAuth ? (
              <div className="flex items-center gap-3 text-[#f9f3e9]">
                <span className="text-sm">Hi, {user?.name}</span>
                <button
                  onClick={logout}
                  className="text-xs underline hover:opacity-80"
                  aria-label="User logout"
                >
                  Logout
                </button>
              </div>
            ) : null}

            <button
              onClick={() => setIsAuthOpen(true)}
              className="flex items-center justify-center w-8 h-8 border border-white rounded-full hover:bg-white hover:text-[#4f2d20] transition-all duration-300 group"
              aria-label="User profile and authentication"
            >
              <FaUserAlt className="w-3 h-3" />
            </button>

            <button className="flex items-center justify-center w-8 h-8 border border-white rounded-full hover:bg-white hover:text-[#4f2d20] transition-all duration-300 group">
              <CiShoppingBasket
                className="w-4 h-4 stroke-1 group-hover:stroke-[1.5] transition-all duration-300"
                aria-label="Shopping cart"
              />
            </button>
          </div>
        </div>

        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </header>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default Header;
