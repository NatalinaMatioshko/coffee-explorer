import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

type WhySpecialtyCoffeeProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaLabel?: string;
  ctaTo?: string;
  imageSrc: string;
  imageAlt?: string;
};

export default function WhySpecialtyCoffee({
  title = "Why specialty coffee?",
  subtitle = "Coffee is a craft",
  description = `Specialty coffee is about transparency, quality, and respect for origin.
Every bean is evaluated, every roast intentional.`,
  ctaLabel = "Learn more",

  imageSrc,
  imageAlt = "Barista preparing specialty coffee",
}: WhySpecialtyCoffeeProps) {
  return (
    <section className="bg-[#f9f3e9] py-20">
      <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-90 overflow-hidden rounded-2xl md:h-112"
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="max-w-xl"
        >
          <p className="mb-3 text-sm uppercase tracking-widest text-[#4f2d20]">
            {title}
          </p>

          <h2 className="mb-6 text-3xl font-light text-[#4f2d20] md:text-4xl">
            {subtitle}
          </h2>

          <p className="mb-6 whitespace-pre-line text-[#4f2d20]">
            {description}
          </p>

          <NavLink
            to="/courses"
            className="inline-block rounded-full border border-[#4f2d20] px-6 py-3 text-sm text-[#4f2d20] transition hover:bg-[#4f2d20] hover:text-[#f9f3e9]"
          >
            {ctaLabel}
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
}
