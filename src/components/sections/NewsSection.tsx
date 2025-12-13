import { useEffect, useState } from "react";
import { getNews, type NewsItem } from "../../api/newsApi";

export default function NewsSection() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        setLoading(true);
        const data = await getNews();
        if (alive) setItems(data);
      } catch (e) {
        if (alive) setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-widest text-neutral-500">
              Coffee news
            </p>
            <h2 className="text-3xl font-light text-neutral-900 md:text-4xl">
              What’s brewing
            </h2>
          </div>
        </div>

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
            {error}
          </div>
        )}

        {loading ? (
          <div className="grid gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="animate-pulse rounded-2xl border p-4">
                <div className="mb-4 h-40 w-full rounded-xl bg-neutral-200" />
                <div className="mb-2 h-4 w-24 rounded bg-neutral-200" />
                <div className="mb-2 h-5 w-full rounded bg-neutral-200" />
                <div className="h-5 w-5/6 rounded bg-neutral-200" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {items.slice(0, 6).map((n) => (
              <article
                key={n.id}
                className="group overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="overflow-hidden">
                  <img
                    src={"https://coffee.alexflipnote.dev/random"}
                    alt={n.title}
                    loading="lazy"
                    className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2 text-xs text-neutral-500">
                    <span className="rounded-full border px-2 py-1">
                      {n.category}
                    </span>
                    <span>{n.date}</span>
                  </div>

                  <h3 className="mb-2 text-lg font-medium text-neutral-900">
                    {n.title}
                  </h3>

                  <p className="text-sm text-neutral-600">{n.excerpt}</p>

                  {/* На старті можна без навігації: просто кнопка-заглушка */}
                  <button
                    type="button"
                    className="mt-4 text-sm text-neutral-900 underline underline-offset-4 hover:no-underline"
                    onClick={() => alert(n.content)}
                  >
                    Read more
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
