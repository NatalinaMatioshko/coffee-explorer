import React from "react";
import coffeeOrigin from "../assets/img/ethiopia.webp";
import coffeeRoasting from "../assets/img/roaster.webp";

const factsData = [
  {
    id: 1,
    image: coffeeOrigin,
    title: "Ancient Origins",
    subtitle: "9th Century Ethiopia",
    description:
      "Legend says a goat herder named Kaldi discovered coffee when he noticed his goats dancing after eating mysterious berries. The energizing effect spread from Ethiopia to the Arabian Peninsula, eventually conquering the world.",
    stats: [
      { label: "Countries Growing Coffee", value: "70+" },
      { label: "Coffee Species", value: "120+" },
    ],
  },
  {
    id: 2,
    image: coffeeRoasting,
    title: "The Perfect Roast",
    subtitle: "Science Meets Art",
    description:
      "Coffee roasting is a delicate dance between temperature and time. Light roasts preserve origin flavors, while dark roasts develop bold, caramelized notes. Master roasters spend years perfecting their craft.",
    stats: [
      { label: "Roasting Temperature", value: "200-240°C" },
      { label: "Roasting Time", value: "8-15 min" },
    ],
  },
];

const CoffeeFacts: React.FC = () => {
  return (
    <section className="bg-[#4f2d20] py-20 px-4">
      <div className="max-w-360 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#ceafa3] text-center mb-16">
          Journey Through Coffee
        </h2>

        <div className=" space-y-24">
          {factsData.map((fact, index) => (
            <div
              key={fact.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row " : "lg:flex-row-reverse"
              } items-center gap-12`}
            >
              {/* Картинка */}
              <div className="w-full lg:w-1/2">
                <img
                  src={fact.image}
                  alt={fact.title}
                  className="w-full h-100 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>

              {/* Контент */}
              <div className=" rounded-2xl  w-full lg:w-1/2 space-y-6">
                <div>
                  <p className="text-white font-semibold uppercase tracking-wider text-sm mb-2">
                    {fact.subtitle}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#ceafa3] mb-4">
                    {fact.title}
                  </h3>
                  <p className="text-lg text-white leading-relaxed">
                    {fact.description}
                  </p>
                </div>

                {/* Статистика */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-amber-200">
                  {fact.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-3xl font-bold text-[#ceafa3] mb-1">
                        {stat.value}
                      </p>
                      <p className="text-sm text-[#ceafa3] uppercase tracking-wide">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeFacts;
