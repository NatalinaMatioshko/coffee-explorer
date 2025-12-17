import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Recipe = {
  id: number;
  title: string;
  image?: string;
};

export default function GalleryPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}recipes.json`);
        if (!res.ok) throw new Error("Failed to load");
        const data = await res.json();
        if (alive) setRecipes(data);
      } catch (e) {
        console.error(e);
      } finally {
        if (alive) setLoading(false);
      }
    }
    load();
    return () => {
      alive = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-fefbf3 pt-30">
      <div className="mx-auto max-w-5xl px-4 pb-20 pt-10">
        {/* Profile header */}
        <header className="mb-10 flex flex-col gap-8 md:flex-row md:items-center">
          {/* Avatar */}
          <div className="flex justify-center md:justify-start">
            <div className="h-36 w-36 rounded-full bg-linear-to-tr from-amber-400 via-amber-600 to-amber-800 p-1">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-5xl">
                ☕
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-6 flex flex-col items-center gap-4 md:flex-row">
              <h1 className="text-2xl font-light text-4f2d20">
                coffeeexplorer
              </h1>
              <div className="flex gap-2">
                <button className="rounded-lg bg-4f2d20 px-6 py-1.5 text-sm font-semibold text-fefbf3 transition hover:opacity-90">
                  Follow
                </button>
                <button className="rounded-lg border border-amber-200 bg-white px-6 py-1.5 text-sm font-semibold text-4f2d20 transition hover:bg-amber-50">
                  Message
                </button>
              </div>
            </div>

            <div className="mb-4 flex justify-center gap-10 text-sm md:justify-start">
              <span>
                <strong className="text-4f2d20">{recipes.length}</strong> posts
              </span>
              <span>
                <strong className="text-4f2d20">617</strong> followers
              </span>
              <span>
                <strong className="text-4f2d20">25.6k</strong> following
              </span>
            </div>

            <div className="text-sm text-4f2d20">
              <p className="font-semibold">COFFEE EXPLORER & CO.</p>
              <p className="mt-1 text-neutral-700">
                Where beans become experiences ☕
              </p>
              <p className="mt-1 text-neutral-700">Kyiv, Ukraine</p>
            </div>
          </div>
        </header>

        {/* Highlights (optional) */}
        <div className="mb-10 flex gap-6 overflow-x-auto pb-2">
          {/* Highlights — перші 7 рецептів */}
          <div className="mb-10 flex gap-6 overflow-x-auto pb-2">
            {recipes.slice(0, 7).map((r) => (
              <div
                key={r.id}
                className="flex shrink-0 flex-col items-center gap-2"
              >
                <div className="h-20 w-20 rounded-full border-2 border-amber-300 bg-amber-50 p-1">
                  {r.image ? (
                    <img
                      src={`${import.meta.env.BASE_URL}${r.image}`}
                      alt={r.title}
                      className="h-full w-full rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-amber-100 text-2xl">
                      ☕
                    </div>
                  )}
                </div>
                <span className="max-w-20 truncate text-xs text-neutral-600">
                  {r.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-amber-200" />

        {/* Grid toggle (Instagram має тут іконки, ми просто текст) */}
        <div className="my-4 flex justify-center gap-8 text-sm font-semibold text-4f2d20">
          <button className="border-b-2 border-4f2d20 pb-3">POSTS</button>
          <button className="pb-3 text-neutral-400">SAVED</button>
          <button className="pb-3 text-neutral-400">TAGGED</button>
        </div>

        {/* Photo grid */}
        {loading ? (
          <p className="mt-10 text-center text-neutral-500">Loading...</p>
        ) : (
          <div className="grid grid-cols-3 gap-1">
            {recipes.map((r) => (
              <Link
                key={r.id}
                to={`/menu/${r.id}`}
                className="group relative aspect-square overflow-hidden bg-amber-50"
              >
                {r.image ? (
                  <img
                    src={`${import.meta.env.BASE_URL}${r.image}`}
                    alt={r.title}
                    className="h-full w-full object-cover transition group-hover:opacity-90"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-neutral-400">
                    No image
                  </div>
                )}
                {/* Hover overlay (optional) */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 text-white opacity-0 transition group-hover:opacity-100">
                  <span>♡ 42</span>
                  <span>💬 5</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
