import { useEffect, useRef } from "react";

import coffee1 from "../assets/img/coffee-bean-samples.webp";
import coffee2 from "../assets/img/coffee-beans-burlap-bag.webp";
import coffee3 from "../assets/img/coffee-pour-action.webp";
import coffee4 from "../assets/img/coffee-roasting-machine.webp";
import coffee5 from "../assets/img/espresso-cup-and-beans.webp";
import coffee6 from "../assets/img/espresso-machine-bar.webp";
import coffee7 from "../assets/img/fresh-roasted-coffee-beans.webp";
import coffee8 from "../assets/img/landscape.webp";
import coffee9 from "../assets/img/manual-coffee-grinder-closeup.webp";

const coffeeImages = [
  { src: coffee1, alt: "Get Body in shape, Stay healthy" },
  { src: coffee2, alt: "Manage Your Finances Masterfully!" },
  { src: coffee3, alt: "ORGANIC VEGETABLES TO YOUR DIET TODAY!" },
  { src: coffee4, alt: "Fresh harvest box" },
  { src: coffee5, alt: "Espresso cup with aromatic coffee beans" },
  { src: coffee6, alt: "Professional espresso machine at coffee bar" },
  { src: coffee7, alt: "Fresh roasted coffee beans close-up" },
  { src: coffee8, alt: "Coffee plantation landscape view" },
  { src: coffee9, alt: "Manual coffee grinder with beans" },
];

const CoffeeMarquee = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const marquee = marqueeRef.current;

    if (!section || !marquee) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            marquee.classList.add("animate-marquee");
          } else {
            marquee.classList.remove("animate-marquee");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);
  return (
    <section ref={sectionRef} className="py-16 bg-[#4f2d20] overflow-hidden">
      <h2 className="sr-only">Coffee Projects Showcase</h2>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-gray-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-gray-900 to-transparent z-10" />

        <div ref={marqueeRef} className="flex gap-6">
          {coffeeImages.map((img, index) => (
            <div
              key={`first-${index}`}
              className="shrink-0 w-70.5 h-40.5 rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}

          {coffeeImages.map((img, index) => (
            <div
              key={`second-${index}`}
              className="shrink-0  w-70.5 h-40.5  rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeMarquee;
