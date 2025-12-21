import React from "react";
import { motion } from "framer-motion";
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
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#D4C5B9] text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Journey Through Coffee
        </motion.h2>

        <div className="space-y-24">
          {factsData.map((fact, index) => (
            <motion.div
              key={fact.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Картинка */}
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img
                  src={fact.image}
                  alt={fact.title}
                  className="w-full h-100 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </motion.div>

              {/* Контент */}
              <motion.div
                className="rounded-2xl w-full lg:w-1/2 space-y-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div>
                  <p className="text-[#f9f3e9] font-semibold uppercase tracking-wider text-sm mb-2">
                    {fact.subtitle}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#D4C5B9] mb-4">
                    {fact.title}
                  </h3>
                  <p className="text-lg text-[#f9f3e9] leading-relaxed">
                    {fact.description}
                  </p>
                </div>

                {/* Статистика */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#8B5A3C]">
                  {fact.stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + idx * 0.1 + index * 0.1,
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <p className="text-3xl font-bold text-[#D4C5B9] mb-1">
                        {stat.value}
                      </p>
                      <p className="text-sm text-[#D4C5B9] uppercase tracking-wide">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeFacts;
