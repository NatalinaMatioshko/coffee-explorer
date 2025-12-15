import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

type MiniProduct = {
  id: string;
  title: string;
  desc: string;
  imageUrl: string;
};

export default function YouMayAlsoLike() {
  const products = useMemo<MiniProduct[]>(
    () => [
      {
        id: "2",
        title: "Santa Monica Filter",
        desc: "A classic cappuccino with thick foam — soft, warm, and familiar.",
        imageUrl:
          "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "3",
        title: "Santa Monica Filter",
        desc: "A classic cappuccino with thick foam — soft, warm, and familiar.",
        imageUrl:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "4",
        title: "Santa Monica Filter",
        desc: "A classic cappuccino with thick foam — soft, warm, and familiar.",
        imageUrl:
          "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "5",
        title: "Santa Monica Filter",
        desc: "A classic cappuccino with thick foam — soft, warm, and familiar.",
        imageUrl:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    []
  );

  const [liked, setLiked] = useState<Record<string, boolean>>({});

  return (
    <section className="bg-[#fefbf3] pb-16">
      <div className="max-w-360 mx-auto px-4">
        <h2 className="text-sm font-semibold tracking-wide text-[#4f2d20]">
          You may also like
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden"
            >
              <div className="relative">
                <img
                  src={p.imageUrl}
                  alt={p.title}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />

                <button
                  type="button"
                  aria-label="Add to favorites"
                  onClick={() =>
                    setLiked((prev) => ({ ...prev, [p.id]: !prev[p.id] }))
                  }
                  className="absolute right-3 top-3 h-9 w-9 rounded-full bg-white/90 border border-amber-200 flex items-center justify-center text-[#4f2d20] hover:border-[#4f2d20] transition"
                >
                  <span className={liked[p.id] ? "opacity-100" : "opacity-70"}>
                    ♥
                  </span>
                </button>
              </div>

              <div className="p-5">
                <h3 className="text-xs tracking-widest text-[#4f2d20] font-semibold">
                  {p.title.toUpperCase()}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-neutral-600 line-clamp-3">
                  {p.desc}
                </p>

                <Link
                  to={`/product/${p.id}`}
                  className="mt-5 inline-flex items-center justify-center w-full h-10 rounded-xl bg-[#4f2d20] text-[#fefbf3] text-xs tracking-wide hover:opacity-90 transition"
                >
                  View more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
