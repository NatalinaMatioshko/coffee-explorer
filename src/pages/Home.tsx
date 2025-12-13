import React from "react";
import Header from "../layers/Header";
import bgImage from "../assets/img/bg-img.png";
import CoffeeMarquee from "../components/CoffeeMarquee";
import Marquee from "../components/Marquee";

import CoffeeNewsSection from "../components/sections/CoffeeNewsSection";
// import HowWeBrew from "../components/HowWeBrew";

const Home: React.FC = () => {
  const mainTitle = "Coffee Explorer";
  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat text-white relative flex flex-col"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Затемнення фону */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Контент з обмеженою шириною */}
        <div className="w-full max-w-360 mx-auto relative z-10 px-4 md:px-10 flex flex-col min-h-screen">
          {/* Header */}
          <Header />

          {/* MAIN - центрований контент */}
          <main className="flex-1 flex flex-col items-center justify-center py-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Sonsie_One'] text-[#fff8e8] title-shimmer drop-shadow-lg text-center px-4">
              {mainTitle}
            </h1>
            <button className="border-2 border-white min-w-60 rounded-xl px-8 py-3 mt-10 uppercase text-sm md:text-base tracking-wide hover:bg-white hover:text-amber-950 hover:tracking-widest transition-all duration-300 cursor-pointer">
              Shop Coffee
            </button>
          </main>
        </div>
        <Marquee />
        {/* <HowWeBrew imageSrc="../assets/img/coffee-pour-action.webp" /> */}
      </div>
      <CoffeeNewsSection />
      {/* Marquee Section - поза hero */}
      <CoffeeMarquee />
    </>
  );
};

export default Home;
