// // import { useMemo, useState } from "react";
// // import { Link, useParams } from "react-router-dom";
// // import ProductReviews from "../sections/ProductReviews";
// // import YouMayAlsoLike from "../sections/YouMayAlsoLike";

// // type Product = {
// //   id: string;
// //   title: string;
// //   priceUsd: number;
// //   rating: number; // 0..5
// //   reviewsCount: number;
// //   shortDesc: string;
// //   imageUrl: string;
// //   type: string;
// //   roast: string;
// //   country: string;
// //   method: string;
// //   preparation: Array<{ title: string; text: string }>;
// //   sizes: number[]; // grams
// // };

// // function Stars({ value }: { value: number }) {
// //   const full = Math.round(value);
// //   return (
// //     <div className="flex items-center gap-1">
// //       {Array.from({ length: 5 }).map((_, i) => (
// //         <span
// //           key={i}
// //           className={i < full ? "text-amber-400" : "text-amber-200"}
// //         >
// //           ★
// //         </span>
// //       ))}
// //     </div>
// //   );
// // }

// // function Accordion({
// //   title,
// //   children,
// //   defaultOpen = false,
// // }: {
// //   title: string;
// //   children: React.ReactNode;
// //   defaultOpen?: boolean;
// // }) {
// //   const [open, setOpen] = useState(defaultOpen);

// //   return (
// //     <div className="border-t border-amber-200 py-4">
// //       <button
// //         type="button"
// //         onClick={() => setOpen((v) => !v)}
// //         className="w-full flex items-center justify-between text-left"
// //       >
// //         <span className="text-sm font-semibold tracking-wide text-[#4f2d20] uppercase">
// //           {title}
// //         </span>
// //         <span className="text-[#4f2d20]">{open ? "▴" : "▾"}</span>
// //       </button>

// //       {open ? <div className="pt-4">{children}</div> : null}
// //     </div>
// //   );
// // }

// // export default function ProductPage() {
// //   const { id = "1" } = useParams();

// //   // Тимчасово mock (потім замінимо на API)
// //   const product: Product = useMemo(
// //     () => ({
// //       id,
// //       title: "Santa Monica Filter",
// //       priceUsd: 12,
// //       rating: 5,
// //       reviewsCount: 5,
// //       shortDesc:
// //         "A rich, aromatic coffee with a smooth, high-altitude character. Balanced flavor with subtle sweetness and a warm, lasting finish.",
// //       imageUrl:
// //         "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
// //       type: "Hot",
// //       roast: "Medium",
// //       country: "Brazil, Santa Monica",
// //       method: "Filter",
// //       sizes: [150, 200, 250, 300, 400],
// //       preparation: [
// //         {
// //           title: "Measure",
// //           text: "Use 18–22 g freshly ground coffee for one cup.",
// //         },
// //         {
// //           title: "Grind size",
// //           text: "Medium grind, ideal for V60, Chemex, or other pour-over methods.",
// //         },
// //         {
// //           title: "Water temperature",
// //           text: "Heat water to 92–96°C for clean and balanced extraction.",
// //         },
// //         {
// //           title: "Brew",
// //           text: "Pour slowly in circles. Total brew time: 2:45–3:15 min.",
// //         },
// //         {
// //           title: "Serve",
// //           text: "Enjoy hot for a smooth finish and clear sweetness.",
// //         },
// //       ],
// //     }),
// //     [id]
// //   );

// //   const [size, setSize] = useState<number>(
// //     product.sizes[2] ?? product.sizes[0]
// //   );
// //   const [liked, setLiked] = useState(false);

// //   return (
// //     <div className="min-h-screen bg-[#f9f3e9]">
// //       <div className="max-w-360 mx-auto px-4 pt-24 pb-16">
// //         {/* Breadcrumbs */}
// //         <div className="text-xs text-neutral-500 mb-6">
// //           <Link to="/" className="hover:underline">
// //             Home
// //           </Link>
// //           <span className="mx-2">/</span>
// //           <Link to="/beans" className="hover:underline">
// //             Hot Coffee
// //           </Link>
// //           <span className="mx-2">/</span>
// //           <span className="text-neutral-700">{product.title}</span>
// //         </div>

// //         <div className="grid gap-10 lg:grid-cols-2">
// //           {/* Left: image */}
// //           <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-amber-100">
// //             <div className="aspect-4/3 w-full">
// //               <img
// //                 src={product.imageUrl}
// //                 alt={product.title}
// //                 className="h-full w-full object-cover"
// //                 loading="lazy"
// //               />
// //             </div>
// //           </div>

// //           {/* Right: details */}
// //           <div>
// //             <h1 className="text-3xl md:text-4xl font-semibold tracking-wide text-[#4f2d20]">
// //               {product.title.toUpperCase()}
// //             </h1>

// //             <div className="mt-3 flex items-center gap-3">
// //               <Stars value={product.rating} />
// //               <span className="text-xs text-neutral-500">
// //                 {product.reviewsCount} reviews
// //               </span>
// //             </div>

// //             <div className="mt-4 text-[#4f2d20] font-semibold">
// //               $ {product.priceUsd} USD
// //             </div>

// //             <p className="mt-4 text-sm leading-relaxed text-neutral-700 max-w-xl">
// //               {product.shortDesc}
// //             </p>

// //             {/* Size */}
// //             <div className="mt-6">
// //               <div className="flex items-center gap-2 text-sm text-neutral-700">
// //                 <span className="font-semibold text-[#4f2d20]">Size</span>
// //                 <span className="text-neutral-500">{size}g</span>
// //               </div>

// //               <div className="mt-3 flex flex-wrap gap-2">
// //                 {product.sizes.map((s) => {
// //                   const active = s === size;
// //                   return (
// //                     <button
// //                       key={s}
// //                       type="button"
// //                       onClick={() => setSize(s)}
// //                       className={[
// //                         "px-4 py-2 rounded-full border text-sm transition",
// //                         active
// //                           ? "bg-[#4f2d20] text-[#fefbf3] border-[#4f2d20]"
// //                           : "bg-transparent text-[#4f2d20] border-amber-200 hover:border-[#4f2d20]",
// //                       ].join(" ")}
// //                     >
// //                       {s}
// //                     </button>
// //                   );
// //                 })}
// //               </div>
// //             </div>

// //             {/* Actions */}
// //             <div className="mt-6 flex items-center gap-4">
// //               <button
// //                 type="button"
// //                 className="h-12 px-8 rounded-xl bg-[#4f2d20] text-[#fefbf3] hover:opacity-90 transition"
// //                 onClick={() => {
// //                   // тут потім додамо в cart (localStorage / context)
// //                   alert(`Added to cart: ${product.title} (${size}g)`);
// //                 }}
// //               >
// //                 Add to cart
// //               </button>

// //               <button
// //                 type="button"
// //                 aria-label="Add to favorites"
// //                 onClick={() => setLiked((v) => !v)}
// //                 className={[
// //                   "h-12 w-12 rounded-xl border transition flex items-center justify-center",
// //                   liked
// //                     ? "border-[#4f2d20] bg-[#4f2d20] text-[#fefbf3]"
// //                     : "border-amber-200 text-[#4f2d20] hover:border-[#4f2d20]",
// //                 ].join(" ")}
// //               >
// //                 ♥
// //               </button>
// //             </div>

// //             {/* Accordions */}
// //             <div className="mt-8">
// //               <Accordion title="Description" defaultOpen>
// //                 <div className="space-y-3 text-sm text-neutral-700">
// //                   <div className="flex items-center gap-2">
// //                     <span className="text-neutral-500 w-28">Type:</span>
// //                     <span className="text-[#4f2d20]">{product.type}</span>
// //                   </div>
// //                   <div className="flex items-center gap-2">
// //                     <span className="text-neutral-500 w-28">Roast:</span>
// //                     <span className="text-[#4f2d20]">{product.roast}</span>
// //                   </div>
// //                   <div className="flex items-center gap-2">
// //                     <span className="text-neutral-500 w-28">Country:</span>
// //                     <span className="text-[#4f2d20]">{product.country}</span>
// //                   </div>
// //                   <div className="flex items-center gap-2">
// //                     <span className="text-neutral-500 w-28">Method:</span>
// //                     <span className="text-[#4f2d20]">{product.method}</span>
// //                   </div>
// //                 </div>
// //               </Accordion>

// //               <Accordion title="Preparation Method" defaultOpen>
// //                 <ol className="space-y-3 text-sm text-neutral-700 list-decimal pl-5">
// //                   {product.preparation.map((step, idx) => (
// //                     <li key={idx}>
// //                       <span className="font-semibold text-[#4f2d20]">
// //                         {step.title}:
// //                       </span>{" "}
// //                       {step.text}
// //                     </li>
// //                   ))}
// //                 </ol>
// //               </Accordion>
// //             </div>
// //           </div>
// //         </div>
// //         <ProductReviews />
// //         <YouMayAlsoLike />
// //       </div>
// //     </div>
// //   );
// // }

// // import { useEffect, useMemo, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import { useShop } from "../context/ShopContext";

// // type Drink = {
// //   id: number;
// //   title: string;
// //   description: string;
// //   ingredients: string[];
// //   image?: string;
// // };

// // type Bean = {
// //   id: number;
// //   name: string;
// //   country: string;
// //   roast_level: string;
// //   process_method: string;
// //   quantity: number;
// //   image?: string;
// // };

// // type Props = {
// //   type: "drink" | "bean";
// // };

// // export default function ProductPage({ type }: Props) {
// //   const { id } = useParams();
// //   const { addToCart, toggleFavorite } = useShop();

// //   const [data, setData] = useState<Drink | Bean | null>(null);
// //   const [loading, setLoading] = useState(true);

// //   const url = useMemo(() => {
// //     return type === "drink"
// //       ? "/coffee-explorer/recipes.json"
// //       : "/coffee-explorer/beans.json";
// //   }, [type]);

// //   useEffect(() => {
// //     if (!id) return;

// //     setLoading(true);

// //     fetch(url)
// //       .then((res) => res.json())
// //       .then((items: Array<any>) => {
// //         const found = items.find((i) => String(i.id) === String(id));
// //         setData(found || null);
// //       })
// //       .finally(() => setLoading(false));
// //   }, [id, url]);

// //   if (loading) {
// //     return <p className="p-10 text-[#4f2d20]">Loading…</p>;
// //   }

// //   if (!data) {
// //     return <p className="p-10 text-red-600">Product not found</p>;
// //   }

// //   const title = "title" in data ? data.title : data.name;

// //   return (
// //     <div className="min-h-screen bg-[#fefbf3]">
// //       <div className="mx-auto max-w-360 px-4 py-20">
// //         <div className="grid gap-10 lg:grid-cols-2">
// //           {/* Image */}
// //           {data.image && (
// //             <img
// //               src={`/coffee-explorer/${data.image}`}
// //               alt={title}
// //               className="rounded-2xl bg-white p-6 object-contain"
// //             />
// //           )}

// //           {/* Info */}
// //           <div>
// //             <h1 className="text-4xl font-bold text-[#4f2d20]">{title}</h1>

// //             {"description" in data && (
// //               <p className="mt-4 text-neutral-700">{data.description}</p>
// //             )}

// //             {"ingredients" in data && (
// //               <div className="mt-4 flex flex-wrap gap-2">
// //                 {data.ingredients.map((i) => (
// //                   <span
// //                     key={i}
// //                     className="rounded-full border border-amber-200 px-3 py-1 text-xs text-[#4f2d20]"
// //                   >
// //                     {i}
// //                   </span>
// //                 ))}
// //               </div>
// //             )}

// //             {"country" in data && (
// //               <ul className="mt-6 space-y-2 text-sm text-neutral-700">
// //                 <li>
// //                   <strong>Country:</strong> {data.country}
// //                 </li>
// //                 <li>
// //                   <strong>Roast:</strong> {data.roast_level}
// //                 </li>
// //                 <li>
// //                   <strong>Process:</strong> {data.process_method}
// //                 </li>
// //                 <li>
// //                   <strong>Quantity:</strong> {data.quantity} g
// //                 </li>
// //               </ul>
// //             )}

// //             {/* Actions */}
// //             <div className="mt-8 flex flex-wrap gap-3">
// //               <button
// //                 onClick={() => addToCart({ id: String(data.id), title })}
// //                 className="h-10 rounded-xl bg-[#4f2d20] px-5 text-sm text-[#fefbf3] hover:opacity-90"
// //               >
// //                 Add to cart
// //               </button>

// //               <button
// //                 onClick={() => toggleFavorite({ id: String(data.id), title })}
// //                 className="h-10 rounded-xl border border-[#4f2d20] px-5 text-sm text-[#4f2d20] transition hover:bg-[#4f2d20] hover:text-[#fefbf3]"
// //               >
// //                 Favorite
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import { useEffect, useMemo, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { useShop } from "../context/ShopContext";

// type Drink = {
//   id: number;
//   title: string;
//   method: string;
//   description: string;
//   ingredients: string[];
//   instructions: string[];
//   image?: string; // "recipes/1.webp" [file:18]
// };

// type Bean = {
//   id: number;
//   name: string;
//   country: string;
//   roast_level: string;
//   process_method: string;
//   quantity: number;
//   image?: string; // "coffees/Flag_of_Kenya..." [file:17]
// };

// type Props = {
//   type: "drink" | "bean";
// };

// function Stars({ value }: { value: number }) {
//   const full = Math.round(value);
//   return (
//     <div className="flex items-center gap-1">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <span
//           key={i}
//           className={i < full ? "text-amber-400" : "text-amber-200"}
//         >
//           ★
//         </span>
//       ))}
//     </div>
//   );
// }

// function Accordion({
//   title,
//   children,
//   defaultOpen = false,
// }: {
//   title: string;
//   children: React.ReactNode;
//   defaultOpen?: boolean;
// }) {
//   const [open, setOpen] = useState(defaultOpen);

//   return (
//     <div className="border-t border-amber-200 py-4">
//       <button
//         type="button"
//         onClick={() => setOpen((v) => !v)}
//         className="flex w-full items-center justify-between text-left"
//       >
//         <span className="text-sm font-semibold uppercase tracking-wide text-[#4f2d20]">
//           {title}
//         </span>
//         <span className="text-[#4f2d20]">{open ? "▴" : "▾"}</span>
//       </button>
//       {open ? <div className="pt-4">{children}</div> : null}
//     </div>
//   );
// }

// export default function ProductPage({ type }: Props) {
//   const { id } = useParams();
//   const { addToCart, toggleFavorite } = useShop();

//   const [data, setData] = useState<Drink | Bean | null>(null);
//   const [loading, setLoading] = useState(true);

//   const url = useMemo(() => {
//     return type === "drink"
//       ? "/coffee-explorer/recipes.json"
//       : "/coffee-explorer/beans.json";
//   }, [type]);

//   useEffect(() => {
//     if (!id) return;

//     setLoading(true);
//     fetch(url)
//       .then((res) => res.json())
//       .then((items: Drink[] | Bean[]) => {
//         const found = items.find((i) => String(i.id) === String(id));
//         setData(found ?? null);
//       })

//       .finally(() => setLoading(false));
//   }, [id, url]);

//   const title = data ? ("title" in data ? data.title : data.name) : "";

//   // “мокові” значення для UI як у макеті (можеш потім замінити на реальні)
//   const rating = 5;
//   const reviewsCount = 5;
//   const priceUsd = type === "drink" ? 9 : 12;

//   // Sizes: для bean логічно quantity з JSON, для drink — фіксовані порції
//   const sizes = useMemo(() => {
//     if (!data) return [];
//     if ("quantity" in data)
//       return [150, 200, data.quantity, 300, 400].filter(
//         (v, i, arr) => Number.isFinite(v) && arr.indexOf(v) === i
//       );
//     return [150, 200, 250, 300];
//   }, [data]);

//   const [size, setSize] = useState<number>(sizes[0] ?? 250);
//   useEffect(() => {
//     if (sizes.length) setSize(sizes.includes(size) ? size : sizes[0]);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [sizes.join(",")]);

//   // ВАЖЛИВО: з урахуванням твоєї структури public/media/recipes/* [image:1]
//   const imageSrc = useMemo(() => {
//     if (!data?.image) return "";
//     if (type === "drink") return `/coffee-explorer/media/${data.image}`;
//     return `/coffee-explorer/${data.image}`;
//   }, [data, type]);

//   if (loading) return <p className="p-10 text-[#4f2d20]">Loading…</p>;
//   if (!data) return <p className="p-10 text-red-600">Product not found</p>;

//   const backTo = type === "drink" ? "/menu" : "/beans";
//   const backLabel = type === "drink" ? "Drinks" : "Beans";

//   return (
//     <div className="min-h-screen bg-[#f9f3e9]">
//       <div className="mx-auto max-w-360 px-4 pt-24 pb-16">
//         {/* Breadcrumbs */}
//         <div className="mb-6 text-xs text-neutral-500">
//           <Link to="/" className="hover:underline">
//             Home
//           </Link>
//           <span className="mx-2">/</span>
//           <Link to={backTo} className="hover:underline">
//             {backLabel}
//           </Link>
//           <span className="mx-2">/</span>
//           <span className="text-neutral-700">{title}</span>
//         </div>

//         <div className="grid gap-10 lg:grid-cols-2">
//           {/* Left: image */}
//           <div className="overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm">
//             <div className="aspect-4/3 w-full bg-amber-50">
//               {imageSrc ? (
//                 <img
//                   src={imageSrc}
//                   alt={title}
//                   className="h-full w-full object-cover"
//                   loading="lazy"
//                 />
//               ) : (
//                 <div className="flex h-full w-full items-center justify-center text-sm text-neutral-500">
//                   No image
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Right: details */}
//           <div>
//             <h1 className="text-3xl font-semibold tracking-wide text-[#4f2d20] md:text-4xl">
//               {title.toUpperCase()}
//             </h1>

//             <div className="mt-3 flex items-center gap-3">
//               <Stars value={rating} />
//               <span className="text-xs text-neutral-500">
//                 {reviewsCount} reviews
//               </span>
//             </div>

//             <div className="mt-4 font-semibold text-[#4f2d20]">
//               $ {priceUsd} USD
//             </div>

//             <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-700">
//               {"description" in data
//                 ? data.description
//                 : "A selected coffee bean with a clean profile and balanced taste."}
//             </p>

//             {/* Size */}
//             {sizes.length ? (
//               <div className="mt-6">
//                 <div className="flex items-center gap-2 text-sm text-neutral-700">
//                   <span className="font-semibold text-[#4f2d20]">Size</span>
//                   <span className="text-neutral-500">{size}g</span>
//                 </div>

//                 <div className="mt-3 flex flex-wrap gap-2">
//                   {sizes.map((s) => {
//                     const active = s === size;
//                     return (
//                       <button
//                         key={s}
//                         type="button"
//                         onClick={() => setSize(s)}
//                         className={[
//                           "rounded-full border px-4 py-2 text-sm transition",
//                           active
//                             ? "border-[#4f2d20] bg-[#4f2d20] text-[#fefbf3]"
//                             : "border-amber-200 bg-transparent text-[#4f2d20] hover:border-[#4f2d20]",
//                         ].join(" ")}
//                       >
//                         {s}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
//             ) : null}

//             {/* Actions */}
//             <div className="mt-6 flex items-center gap-4">
//               <button
//                 type="button"
//                 className="h-12 rounded-xl bg-[#4f2d20] px-8 text-sm text-[#fefbf3] transition hover:opacity-90"
//                 onClick={() => addToCart({ id: String(data.id), title })}
//               >
//                 Add to cart
//               </button>

//               <button
//                 type="button"
//                 aria-label="Add to favorites"
//                 onClick={() => toggleFavorite({ id: String(data.id), title })}
//                 className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-200 text-[#4f2d20] transition hover:border-[#4f2d20]"
//               >
//                 ♥
//               </button>
//             </div>

//             {/* Accordions */}
//             <div className="mt-8">
//               <Accordion title="Description" defaultOpen>
//                 {"country" in data ? (
//                   <div className="space-y-3 text-sm text-neutral-700">
//                     <div className="flex items-center gap-2">
//                       <span className="w-28 text-neutral-500">Country:</span>
//                       <span className="text-[#4f2d20]">{data.country}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span className="w-28 text-neutral-500">Roast:</span>
//                       <span className="text-[#4f2d20]">{data.roast_level}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span className="w-28 text-neutral-500">Process:</span>
//                       <span className="text-[#4f2d20]">
//                         {data.process_method}
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span className="w-28 text-neutral-500">Quantity:</span>
//                       <span className="text-[#4f2d20]">{data.quantity} g</span>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="space-y-3 text-sm text-neutral-700">
//                     <div className="flex items-center gap-2">
//                       <span className="w-28 text-neutral-500">Method:</span>
//                       <span className="text-[#4f2d20]">{data.method}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span className="w-28 text-neutral-500">Type:</span>
//                       <span className="text-[#4f2d20]">
//                         {data.title.toLowerCase().includes("iced") ||
//                         data.method.toLowerCase().includes("cold")
//                           ? "Iced"
//                           : "Hot"}
//                       </span>
//                     </div>
//                   </div>
//                 )}
//               </Accordion>

//               {/* Preparation: для drink беремо instructions з JSON [file:18] */}
//               {"instructions" in data ? (
//                 <Accordion title="Preparation Method" defaultOpen>
//                   <ol className="list-decimal space-y-3 pl-5 text-sm text-neutral-700">
//                     {data.instructions.map((step, idx) => (
//                       <li key={idx}>{step}</li>
//                     ))}
//                   </ol>
//                 </Accordion>
//               ) : null}

//               {/* Ingredients: для drink беремо ingredients з JSON [file:18] */}
//               {"ingredients" in data ? (
//                 <Accordion title="Ingredients">
//                   <div className="flex flex-wrap gap-2">
//                     {data.ingredients.map((ing) => (
//                       <span
//                         key={ing}
//                         className="rounded-full border border-amber-200 px-3 py-1 text-xs text-[#4f2d20]"
//                       >
//                         {ing}
//                       </span>
//                     ))}
//                   </div>
//                 </Accordion>
//               ) : null}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import ProductReviews from "../sections/ProductReviews";
import YouMayAlsoLike from "../sections/YouMayAlsoLike";

type Drink = {
  id: number;
  title: string;
  method: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  image?: string; // "recipes/1.webp"
};

type Bean = {
  id: number;
  name: string;
  country: string;
  roast_level: string;
  process_method: string;
  quantity: number;
  image?: string; // "coffees/..."
};

type Props = {
  type: "drink" | "bean";
};

function Stars({ value }: { value: number }) {
  const full = Math.round(value);
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < full ? "text-amber-400" : "text-amber-200"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-amber-200 py-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-sm font-semibold uppercase tracking-wide text-[#4f2d20]">
          {title}
        </span>
        <span className="text-[#4f2d20]">{open ? "▴" : "▾"}</span>
      </button>
      {open ? <div className="pt-4">{children}</div> : null}
    </div>
  );
}

export default function ProductPage({ type }: Props) {
  const { id } = useParams();
  const { addToCart, toggleFavorite } = useShop();

  const [data, setData] = useState<Drink | Bean | null>(null);
  const [loading, setLoading] = useState(true);

  const url = useMemo(() => {
    return type === "drink"
      ? "/coffee-explorer/recipes.json"
      : "/coffee-explorer/beans.json";
  }, [type]);

  // 1) завантаження даних
  useEffect(() => {
    if (!id) return;

    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((items: Array<Drink | Bean>) => {
        const found = items.find((i) => String(i.id) === String(id));
        setData(found ?? null);
      })
      .finally(() => setLoading(false));
  }, [id, url]);

  // 2) derived дані — ВАЖЛИВО: до будь-яких return
  const title = useMemo(() => {
    if (!data) return "";
    return "title" in data ? data.title : data.name;
  }, [data]);

  const rating = 5;
  const reviewsCount = 5;
  const priceUsd = type === "drink" ? 9 : 12;

  const backTo = type === "drink" ? "/menu" : "/beans";
  const backLabel = type === "drink" ? "Drinks" : "Beans";

  const sizes = useMemo(() => {
    if (!data) return [];
    if ("quantity" in data) {
      return [150, 200, data.quantity, 300, 400].filter(
        (v, i, arr) => Number.isFinite(v) && arr.indexOf(v) === i
      );
    }
    return [150, 200, 250, 300];
  }, [data]);

  // важливо: не ініціалізувати від sizes (бо sizes ще порожній на першому рендері)
  const [size, setSize] = useState<number>(250);

  useEffect(() => {
    if (!sizes.length) return;
    setSize((prev) => (sizes.includes(prev) ? prev : sizes[0]));
  }, [sizes]);

  const imageSrc = useMemo(() => {
    if (!data?.image) return "";
    // у тебе drinks лежать в public/media/recipes/*, тому тільки для drink додаємо media
    return type === "drink"
      ? `/coffee-explorer/media/${data.image}`
      : `/coffee-explorer/${data.image}`;
  }, [data, type]);

  // 3) ранні return — ТІЛЬКИ після всіх хуків
  if (loading) return <p className="p-10 text-[#4f2d20]">Loading…</p>;
  if (!data) return <p className="p-10 text-red-600">Product not found</p>;

  return (
    <div className="min-h-screen bg-[#f9f3e9]">
      <div className="mx-auto max-w-360 px-4 pt-24 pb-16">
        {/* Breadcrumbs */}
        <div className="mb-6 text-xs text-neutral-500">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to={backTo} className="hover:underline">
            {backLabel}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-700">{title}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: image */}
          <div className="overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm">
            <div className="aspect-4/3 w-full bg-amber-50">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-neutral-500">
                  No image
                </div>
              )}
            </div>
          </div>

          {/* Right: details */}
          <div>
            <h1 className="text-3xl font-semibold tracking-wide text-[#4f2d20] md:text-4xl">
              {title.toUpperCase()}
            </h1>

            <div className="mt-3 flex items-center gap-3">
              <Stars value={rating} />
              <span className="text-xs text-neutral-500">
                {reviewsCount} reviews
              </span>
            </div>

            <div className="mt-4 font-semibold text-[#4f2d20]">
              $ {priceUsd} USD
            </div>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-700">
              {"description" in data
                ? data.description
                : "A selected coffee bean with a clean profile and balanced taste."}
            </p>

            {/* Size */}
            {sizes.length ? (
              <div className="mt-6">
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <span className="font-semibold text-[#4f2d20]">Size</span>
                  <span className="text-neutral-500">{size}g</span>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {sizes.map((s) => {
                    const active = s === size;
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSize(s)}
                        className={[
                          "rounded-full border px-4 py-2 text-sm transition",
                          active
                            ? "border-[#4f2d20] bg-[#4f2d20] text-[#fefbf3]"
                            : "border-amber-200 bg-transparent text-[#4f2d20] hover:border-[#4f2d20]",
                        ].join(" ")}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}

            {/* Actions */}
            <div className="mt-6 flex items-center gap-4">
              <button
                type="button"
                className="h-12 rounded-xl bg-[#4f2d20] px-8 text-sm text-[#fefbf3] transition hover:opacity-90"
                onClick={() => addToCart({ id: String(data.id), title })}
              >
                Add to cart
              </button>

              <button
                type="button"
                aria-label="Add to favorites"
                onClick={() => toggleFavorite({ id: String(data.id), title })}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-200 text-[#4f2d20] transition hover:border-[#4f2d20]"
              >
                ♥
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                {"country" in data ? (
                  <div className="space-y-3 text-sm text-neutral-700">
                    <div className="flex items-center gap-2">
                      <span className="w-28 text-neutral-500">Country:</span>
                      <span className="text-[#4f2d20]">{data.country}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-28 text-neutral-500">Roast:</span>
                      <span className="text-[#4f2d20]">{data.roast_level}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-28 text-neutral-500">Process:</span>
                      <span className="text-[#4f2d20]">
                        {data.process_method}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-28 text-neutral-500">Quantity:</span>
                      <span className="text-[#4f2d20]">{data.quantity} g</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 text-sm text-neutral-700">
                    <div className="flex items-center gap-2">
                      <span className="w-28 text-neutral-500">Method:</span>
                      <span className="text-[#4f2d20]">{data.method}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-28 text-neutral-500">Type:</span>
                      <span className="text-[#4f2d20]">
                        {data.title.toLowerCase().includes("iced") ||
                        data.method.toLowerCase().includes("cold")
                          ? "Iced"
                          : "Hot"}
                      </span>
                    </div>
                  </div>
                )}
              </Accordion>

              {"instructions" in data ? (
                <Accordion title="Preparation Method" defaultOpen>
                  <ol className="list-decimal space-y-3 pl-5 text-sm text-neutral-700">
                    {data.instructions.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </Accordion>
              ) : null}

              {"ingredients" in data ? (
                <Accordion title="Ingredients">
                  <div className="flex flex-wrap gap-2">
                    {data.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="rounded-full border border-amber-200 px-3 py-1 text-xs text-[#4f2d20]"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </Accordion>
              ) : null}
            </div>
          </div>
        </div>

        {/* Додаткові секції як раніше */}
        <ProductReviews />
        <YouMayAlsoLike />
      </div>
    </div>
  );
}
