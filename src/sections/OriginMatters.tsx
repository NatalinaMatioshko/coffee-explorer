import React from "react";
import { motion } from "framer-motion";

import ethiopiaImg from "../assets/img/ethiopia1.webp";
import colombiaImg from "../assets/img/colombia.webp";

const originData = [
  {
    id: 1,
    image: ethiopiaImg,
    title: "Taste starts at origin",
    subtitle: "Ethiopia",
    description:
      "Ethiopia is often known for floral aromas and citrus-like brightness. Origin, process, and terroir shape the character you taste in the cup.",
    stats: [
      { label: "Typical notes", value: "Floral / citrus" },
      { label: "Brew style", value: "Filter" },
    ],
  },
  {
    id: 2,
    image: colombiaImg,
    title: "Balance & sweetness",
    subtitle: "Colombia",
    description:
      "Colombia commonly delivers a balanced cup with sweetness and approachable acidity. That consistency makes it great for both espresso and filter.",
    stats: [
      { label: "Typical notes", value: "Sweet / balanced" },
      { label: "Brew style", value: "Espresso / filter" },
    ],
  },
];

const OriginMatters: React.FC = () => {
  return (
    <section className="bg-[#4f2d20] px-4 py-20">
      <div className="mx-auto max-w-360">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center text-4xl font-bold text-[#D4C5B9] md:text-5xl"
        >
          Origin matters
        </motion.h2>

        <div className="space-y-24">
          {originData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.06,
              }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12`}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full lg:w-1/2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-100 w-full rounded-2xl object-cover shadow-xl transition-shadow duration-300 hover:shadow-2xl"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                className="w-full space-y-6 rounded-2xl lg:w-1/2"
              >
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#f9f3e9]">
                    {item.subtitle}
                  </p>

                  <h3 className="mb-4 text-3xl font-bold text-[#D4C5B9] md:text-4xl">
                    {item.title}
                  </h3>

                  <p className="text-lg leading-relaxed text-[#f9f3e9]">
                    {item.description}
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                  className="grid grid-cols-2 gap-6 border-t border-[#8B5A3C] pt-6"
                >
                  {item.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <p className="mb-1 text-3xl font-bold text-[#D4C5B9]">
                        {stat.value}
                      </p>
                      <p className="text-sm uppercase tracking-wide text-[#D4C5B9]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OriginMatters;
