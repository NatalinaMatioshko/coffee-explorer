import React from "react";
import { GiCoffeeBeans } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";

interface SearchBarProps {
  variant?: "desktop" | "mobile";
}

const SearchBar: React.FC<SearchBarProps> = ({ variant = "desktop" }) => {
  if (variant === "mobile") {
    return (
      <button className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-colors">
        <IoSearch className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="hidden lg:flex items-center border border-[#f9f3e9] rounded-full px-3 py-1.5 w-56 hover:bg-white/10 transition-colors group">
      <IoSearch className="w-4 h-4" />
      <input
        type="text"
        placeholder="Search ..."
        className="bg-transparent border-none outline-none text-xs ml-2 text-[#f9f3e9] placeholder-[#f9f3e9] w-full"
      />
      <GiCoffeeBeans className="w-5 h-5" />
    </div>
  );
};

export default SearchBar;
