import React from "react";
import Header from "../layers/Header";
import Footer from "../layers/Footer";

const FavoritesPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#fefbf3] py-20 px-4">
        <div className="max-w-360 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4f2d20] mb-8">
            Your Favorites
          </h1>
          <p className="text-lg text-gray-700">
            Save and explore your favorite coffee selections...
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FavoritesPage;
