import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

type DrinkCategory = "hot" | "iced";

type Drink = {
  id: number;
  title: string;
  desc: string;
  ingredients: string[];
  image?: string;
  category: DrinkCategory;
};

type RecipeFromDb = {
  id: number;
  title: string;
  method: string;
  description: string;
  ingredients: string[];
  image?: string; // приклад: "recipes/1.webp" [file:11]
};

function getCategory(recipe: RecipeFromDb): DrinkCategory {
  const text = `${recipe.title} ${recipe.method}`.toLowerCase();
  return text.includes("iced") || text.includes("cold") ? "iced" : "hot";
}

export default function MenuPage() {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [category, setCategory] = useState<"all" | DrinkCategory>("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        setLoading(true);
        setError(null);

        // якщо recipes.json у public, то BASE_URL + "recipes.json" працює і в dev, і на Pages [file:1]
        const res = await fetch(`${import.meta.env.BASE_URL}recipes.json`);
        if (!res.ok) throw new Error(`Failed to load recipes (${res.status})`);

        const data: RecipeFromDb[] = await res.json();

        const mapped: Drink[] = data.map((r) => ({
          id: r.id,
          title: r.title,
          desc: r.description?.trim() || "No description yet.",
          ingredients: Array.isArray(r.ingredients) ? r.ingredients : [],
          // ВАЖЛИВО: НЕ додаємо "media/". У тебе вже готовий шлях типу "recipes/1.webp" [file:11]
          image: r.image ? `${import.meta.env.BASE_URL}${r.image}` : undefined,
          category: getCategory(r),
        }));

        if (alive) setDrinks(mapped);
      } catch (e) {
        if (!alive) return;
        setError(e instanceof Error ? e.message : "Something went wrong");
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();

    return drinks.filter((d) => {
      const matchCategory = category === "all" ? true : d.category === category;

      const matchQuery =
        q.length === 0
          ? true
          : d.title.toLowerCase().includes(q) ||
            d.ingredients.join(" ").toLowerCase().includes(q);

      return matchCategory && matchQuery;
    });
  }, [drinks, category, query]);

  return (
    <div className="min-h-screen bg-[#fefbf3] pt-30">
      <div className="mx-auto max-w-360 px-4 py-20">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              Coffee menu
            </p>
            <h1 className="text-4xl font-bold text-[#4f2d20] md:text-5xl">
              Drinks
            </h1>
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <div className="inline-flex overflow-hidden rounded-full border border-amber-200 bg-white">
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
              className="h-10 w-full rounded-full border border-amber-200 bg-white px-4 text-sm outline-none focus:border-[#4f2d20] sm:w-72"
            />
          </div>
        </div>

        {/* Status */}
        {error ? <p className="mt-8 text-red-700">{error}</p> : null}
        {loading ? <p className="mt-8 text-[#4f2d20]">Loading…</p> : null}

        {/* Grid */}
        {!loading ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((d) => (
              <article
                key={d.id}
                className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                {d.image ? (
                  <div className="mb-4 overflow-hidden rounded-xl border border-amber-100 bg-amber-50">
                    <img
                      src={d.image}
                      alt={d.title}
                      className="h-44 w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : null}

                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-semibold text-[#4f2d20]">
                    {d.title}
                  </h2>
                  <span className="rounded-full border border-amber-200 px-3 py-1 text-xs text-[#4f2d20]">
                    {d.category}
                  </span>
                </div>

                <p className="mt-3 text-sm text-neutral-700">{d.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {d.ingredients.slice(0, 8).map((ing) => (
                    <span
                      key={ing}
                      className="rounded-full border border-amber-100 bg-amber-50 px-3 py-1 text-xs text-[#4f2d20]"
                    >
                      {ing}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/menu/${d.id}`}
                  className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-xl bg-[#4f2d20] text-sm text-[#fefbf3] transition hover:opacity-90"
                >
                  View details
                </Link>
              </article>
            ))}
          </div>
        ) : null}

        {/* Empty state */}
        {!loading && filtered.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-amber-200 bg-white p-8 text-center text-[#4f2d20]">
            Nothing found. Try another search.
          </div>
        ) : null}
      </div>
    </div>
  );
}
