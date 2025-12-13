// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// type HowWeBrewProps = {
//   title?: string;
//   subtitle?: string;
//   description?: string;
//   ctaLabel?: string;
//   ctaTo?: string;
//   imageSrc: string;
//   imageAlt?: string;
// };

// export default function HowWeBrew({
//   title = "How we brew",
//   subtitle = "Brewing is an art",
//   description = `Different brewing methods unlock different flavors.
// Chemex highlights clarity, V60 brings brightness, while syphon adds depth and complexity.
// Understanding the method helps you choose the right coffee for your taste.`,
//   ctaLabel = "Explore menu",
//   ctaTo = "/menu",
//   imageSrc,
//   imageAlt = "Coffee brewing methods",
// }: HowWeBrewProps) {
//   return (
//     <section className="py-20">
//       <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2">
//         {/* Image */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="overflow-hidden rounded-2xl"
//         >
//           <img
//             src={imageSrc}
//             alt={imageAlt}
//             className="h-full w-full object-cover"
//             loading="lazy"
//           />
//         </motion.div>

//         {/* Content */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
//           className="max-w-xl"
//         >
//           <p className="mb-3 text-sm uppercase tracking-widest text-neutral-500">
//             {title}
//           </p>

//           <h2 className="mb-6 text-3xl font-light text-neutral-900 md:text-4xl">
//             {subtitle}
//           </h2>

//           <p className="mb-6 whitespace-pre-line text-neutral-600">
//             {description}
//           </p>

//           <Link
//             to={ctaTo}
//             className="inline-block rounded-full border border-neutral-900 px-6 py-3 text-sm text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
//           >
//             {ctaLabel}
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
