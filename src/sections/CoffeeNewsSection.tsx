import { useEffect, useState } from "react";
import { getCoffeeNews, type CoffeeNewsItem } from "../api/coffeeNewsApi";

export default function CoffeeNewsSection() {
  const [news, setNews] = useState<CoffeeNewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        setLoading(true);
        const data = await getCoffeeNews(9);
        if (alive) setNews(data);
      } catch (e) {
        if (alive)
          setError(e instanceof Error ? e.message : "Failed to load news");
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  return (
    <section className=" bg-[#f9f3e9] py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-widest text-[#4f2d20]">
            Coffee news
          </p>
          <h2 className="text-3xl font-light text-neutral-900 md:text-4xl">
            What’s brewing
          </h2>
        </div>

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
            {error}
          </div>
        )}

        {loading ? (
          <div className="grid gap-6 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse overflow-hidden rounded-2xl border bg-[#f9f3e9]"
              >
                <div className="h-40 w-full bg-[#f9f3e9]" />
                <div className="p-5">
                  <div className="mb-3 h-4 w-24 rounded bg-[#f9f3e9]" />
                  <div className="mb-2 h-6 w-full rounded bg-[#f9f3e9]" />
                  <div className="h-6 w-5/6 rounded bg-[#f9f3e9]" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {news.map((n) => (
              <article
                key={n.id}
                className="group overflow-hidden rounded-2xl border bg-[#f9f3e9] transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-40 w-full overflow-hidden bg-[#f9f3e9]">
                  {n.imageUrl ? (
                    <img
                      src={n.imageUrl}
                      alt={n.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display =
                          "none";
                      }}
                    />
                  ) : null}

                  <div className="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-xs text-[#4f2d20] backdrop-blur">
                    {n.source}
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-2 text-xs text-[#6B4423]">
                    {n.date ? new Date(n.date).toLocaleDateString() : ""}
                  </div>

                  <h3 className="mb-3 line-clamp-2 text-lg font-medium text-[#4f2d20]">
                    {n.title}
                  </h3>

                  <a
                    href={n.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[#4f2d20] underline underline-offset-4 hover:no-underline"
                  >
                    Read on site
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
