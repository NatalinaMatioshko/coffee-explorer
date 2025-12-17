import React from "react";
import bgImage from "../assets/img/bg-img.png";
import howWeBrewImg from "../assets/img/how-we-brew.webp";
import CoffeeMarquee from "../components/CoffeeMarquee";
import Marquee from "../components/Marquee";
import CoffeeNewsSection from "../sections/CoffeeNewsSection";
import CoffeeFacts from "../sections/CoffeeFacts";
import HowWeBrew from "../sections/HowWeBrew";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat text-white relative flex flex-col"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="w-full max-w-360 mx-auto relative z-10 px-4 md:px-10 flex flex-col min-h-screen">
          {/* Main Content */}
          <div className="flex-1 flex flex-col items-center justify-center py-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Sonsie_One'] text-[#F7F5F2] title-shimmer drop-shadow-lg text-center px-4">
              Coffee Explorer
            </h1>
            <button
              onClick={() => navigate("/beans")}
              className="border-2 border-[#F7F5F2] min-w-60 rounded-xl px-8 py-3 mt-10 uppercase text-sm md:text-base tracking-wide hover:bg-[#F7F5F2] hover:text-amber-950 hover:tracking-widest transition-all duration-300 cursor-pointer"
            >
              Shop for Coffee
            </button>
          </div>
        </div>

        <Marquee />
      </div>
      {/* Sections */}
      <HowWeBrew imageSrc={howWeBrewImg} />
      <CoffeeFacts />
      <CoffeeNewsSection />

      <CoffeeMarquee />
    </>
  );
};

export default HomePage;
