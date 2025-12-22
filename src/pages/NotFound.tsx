import React from "react";
import { Link } from "react-router-dom";
import coffeeCupSvg from "../assets/svg/coffee-cup.svg";

const NotFound: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 mt-14">
      <div className="text-center max-w-2xl">
        <div className="relative">
          <div className="text-[120px] md:text-[200px] font-bold text-[#4f2d20] opacity-60">
            404
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              backgroundImage:
                "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "300px",
              marginTop: "-250px",
            }}
          />
        </div>

        <div className="space-y-4 ">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4f2d20]">
            Ой! Ви заблукали
          </h1>
          <p className="text-lg text-[#7c4936] mb-8">
            Схоже, ця сторінка відправилась у кавову подорож і ще не
            повернулась...
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#4f2d20] text-[#f9f3e9] rounded-full 
                     hover:bg-[#7c4936] transition-all duration-300 
                     font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <img src={coffeeCupSvg} alt="Coffee" className="w-6 h-6 self-end" />
            Повернутись додому
          </Link>
        </div>

        {/* Animated Coffee Cups */}
        <div className="mt-12 flex justify-center gap-4">
          <img
            src={coffeeCupSvg}
            alt="Coffee"
            className="w-16 h-16 animate-bounce"
          />
          <img
            src={coffeeCupSvg}
            alt="Coffee"
            className="w-16 h-16 animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
          <img
            src={coffeeCupSvg}
            alt="Coffee"
            className="w-16 h-16 animate-bounce"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
