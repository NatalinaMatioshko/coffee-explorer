import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { IoSearch } from "react-icons/io5";
import { GiCoffeeBeans } from "react-icons/gi";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#f9f3e9] shadow-2xl animate-slide-in-left">
        <div className="flex items-center justify-between p-4 border-b border-amber-200 bg-[#4f2d20]">
          <Logo variant="small" />

          <button
            onClick={onClose}
            className="p-2 text-[#f9f3e9] hover:bg-white/10 rounded-lg transition-colors"
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

        <div className="p-4 border-b border-[#f9f3e9]">
          <div className="relative flex items-center border border-[#5f2109] rounded-full px-4 py-2 bg-transparent">
            <IoSearch className="w-4 h-4 opacity-50 text-[#4f2d20]" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-sm ml-3 text-[#4f2d20] placeholder-[#4f2d20] w-full"
            />
            <GiCoffeeBeans className="w-10 text-[#4f2d20]" />
          </div>
        </div>

        <Menu isMobile onItemClick={onClose} />
      </div>
    </div>
  );
};

export default MobileMenu;
