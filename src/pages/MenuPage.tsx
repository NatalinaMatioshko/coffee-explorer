import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type Drink = {
  id: string;
  title: string;
  desc: string;
  ingredients: string[];
  image?: string;
  category: "hot" | "iced";
};

const MenuPage: React.FC = () => {
  // Тимчасові дані (потім замінимо на API)
  const drinks = useMemo<Drink[]>(
    () => [
      {
        id: "1",
        title: "Espresso",
        desc: "A classic shot with rich crema.",
        ingredients: ["Espresso"],
        category: "hot",
      },
      {
        id: "2",
        title: "Cappuccino",
        desc: "Espresso with steamed milk and foam.",
        ingredients: ["Espresso", "Milk", "Foam"],
        category: "hot",
      },
      {
        id: "3",
        title: "Iced Latte",
        desc: "Chilled espresso with milk over ice.",
        ingredients: ["Espresso", "Milk", "Ice"],
        category: "iced",
      },
      {
        id: "4",
        title: "Cold Brew",
        desc: "Smooth, slow-steeped coffee served cold.",
        ingredients: ["Coffee", "Water", "Ice"],
        category: "iced",
      },
    ],
    []
  );

  const [category, setCategory] = useState<"all" | "hot" | "iced">("all");
  const [query, setQuery] = useState("");

  const filtered = drinks.filter((d) => {
    const matchCategory = category === "all" ? true : d.category === category;
    const matchQuery =
      d.title.toLowerCase().includes(query.toLowerCase().trim()) ||
      d.ingredients
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase().trim());
    return matchCategory && matchQuery;
  });

  return (
    <div className="min-h-screen bg-[#fefbf3]">
      <div className="max-w-360 mx-auto px-4 py-20">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              Coffee menu
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#4f2d20]">
              Drinks
            </h1>
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <div className="inline-flex rounded-full border border-amber-200 overflow-hidden bg-white">
              <button
                type="button"
                onClick={() => setCategory("all")}
                className={`px-4 py-2 text-sm transition ${
                  category === "all"
                    ? "bg-[#4f2d20] text-[#fefbf3]"
                    : "text-[#4f2d20] hover:bg-amber-50"
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setCategory("hot")}
                className={`px-4 py-2 text-sm transition ${
                  category === "hot"
                    ? "bg-[#4f2d20] text-[#fefbf3]"
                    : "text-[#4f2d20] hover:bg-amber-50"
                }`}
              >
                Hot
              </button>
              <button
                type="button"
                onClick={() => setCategory("iced")}
                className={`px-4 py-2 text-sm transition ${
                  category === "iced"
                    ? "bg-[#4f2d20] text-[#fefbf3]"
                    : "text-[#4f2d20] hover:bg-amber-50"
                }`}
              >
                Iced
              </button>
            </div>

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or ingredient..."
              className="h-10 w-full sm:w-72 rounded-full border border-amber-200 bg-white px-4 text-sm outline-none focus:border-[#4f2d20]"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <article
              key={d.id}
              className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold text-[#4f2d20]">
                  {d.title}
                </h2>
                <span className="text-xs rounded-full border border-amber-200 px-3 py-1 text-[#4f2d20]">
                  {d.category}
                </span>
              </div>

              <p className="mt-3 text-sm text-neutral-700">{d.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {d.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="text-xs rounded-full bg-amber-50 border border-amber-100 px-3 py-1 text-[#4f2d20]"
                  >
                    {ing}
                  </span>
                ))}
              </div>

              <Link
                to={`/menu/${d.id}`}
                className="mt-6 inline-flex w-full items-center justify-center h-10 rounded-xl bg-[#4f2d20] text-[#fefbf3] text-sm hover:opacity-90 transition"
              >
                View details
              </Link>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-amber-200 bg-white p-8 text-center text-[#4f2d20]">
            Nothing found. Try another search.
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MenuPage;

// import { useEffect, useState } from "react";
// import {
//   getHotDrinks,
//   getIcedDrinks,
//   type CoffeeDrink,
// } from "../api/coffeeMenuApi";

// const MenuPage = () => {
//   const [drinks, setDrinks] = useState<CoffeeDrink[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     let alive = true;

//     (async () => {
//       try {
//         setLoading(true);
//         const [hot, iced] = await Promise.all([
//           getHotDrinks(),
//           getIcedDrinks(),
//         ]);
//         if (!alive) return;

//         // об’єднали в один список (пізніше зробимо категорії)
//         setDrinks([...hot, ...iced]);
//       } catch (e) {
//         if (!alive) return;
//         setError(e instanceof Error ? e.message : "Failed to load drinks");
//       } finally {
//         if (alive) setLoading(false);
//       }
//     })();

//     return () => {
//       alive = false;
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#fefbf3]">
//       <div className="max-w-360 mx-auto px-4 py-20">
//         <h1 className="text-4xl font-bold text-[#4f2d20]">Drinks</h1>

//         {error && <p className="mt-6 text-red-700">{error}</p>}
//         {loading ? (
//           <p className="mt-6 text-[#4f2d20]">Loading...</p>
//         ) : (
//           <ul className="mt-6 list-disc pl-6 text-[#4f2d20]">
//             {drinks.slice(0, 10).map((d) => (
//               <li key={`${d.id}-${d.title}`}>{d.title}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MenuPage;
