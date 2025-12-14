import React from "react";
import Header from "../layers/Header";

const CoursesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fefbf3]">
      <Header />
      <div className="max-w-[1440px] mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4f2d20] mb-8">
          Barista Courses
        </h1>
        <p className="text-lg text-gray-700">
          Learn the art of coffee making...
        </p>
      </div>
    </div>
  );
};

export default CoursesPage;
