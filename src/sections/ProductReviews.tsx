import { useMemo, useRef, useState } from "react";

type Review = {
  id: string;
  author: string;
  text: string;
  avatarUrl?: string;
};

export default function ProductReviews() {
  const listRef = useRef<HTMLDivElement>(null);

  const reviews = useMemo<Review[]>(
    () => [
      {
        id: "r1",
        author: "Emma R.",
        text: "Loved this coffee — super clean taste with a nice fruity sweetness. It brews perfectly in my V60 and has become my go-to morning cup.",
        avatarUrl: "https://i.pravatar.cc/80?img=1",
      },
      {
        id: "r2",
        author: "Daniel M.",
        text: "Smooth, balanced, and not too acidic. I was surprised how much clarity it had compared to other medium roasts. Really enjoyable.",
        avatarUrl: "https://i.pravatar.cc/80?img=12",
      },
      {
        id: "r3",
        author: "Sofia L.",
        text: "Santa Monica Filter has such a bright, refreshing flavor. I can taste subtle berry notes, and it pairs great with a light breakfast.",
        avatarUrl: "https://i.pravatar.cc/80?img=32",
      },
      {
        id: "r4",
        author: "Mark T.",
        text: "Great everyday filter coffee. The aroma is amazing, and it stays flavorful even when it cools down. Definitely ordering again.",
        avatarUrl: "https://i.pravatar.cc/80?img=56",
      },
      {
        id: "r5",
        author: "Ava P.",
        text: "Really nice sweetness and warm finish. Works well in Chemex and also Aeropress when I want something softer.",
        avatarUrl: "https://i.pravatar.cc/80?img=47",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  const scrollToIndex = (next: number) => {
    const container = listRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>("[data-review-card]");
    if (!card) return;

    const gap = 24; // gap-6
    const cardWidth = card.offsetWidth + gap;
    container.scrollTo({ left: cardWidth * next, behavior: "smooth" });
  };

  const prev = () => {
    const next = Math.max(0, index - 1);
    setIndex(next);
    scrollToIndex(next);
  };

  const next = () => {
    const max = Math.max(0, reviews.length - 1);
    const nxt = Math.min(max, index + 1);
    setIndex(nxt);
    scrollToIndex(nxt);
  };

  return (
    <section className="bg-[#fefbf3] py-14">
      <div className="max-w-360 mx-auto px-4">
        <h2 className="text-sm font-semibold tracking-wide text-[#4f2d20]">
          Reviews ({reviews.length})
        </h2>

        <div className="mt-6 relative">
          <div
            ref={listRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none]"
          >
            {/* приховати scrollbar у webkit */}
            <style>{`div::-webkit-scrollbar{display:none;}`}</style>

            {reviews.map((r) => (
              <article
                key={r.id}
                data-review-card
                className="min-w-70 md:min-w-90 bg-white rounded-2xl border border-amber-100 shadow-sm p-6"
              >
                <p className="text-sm leading-relaxed text-neutral-700">
                  “{r.text}”
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={r.avatarUrl}
                    alt={r.author}
                    className="h-10 w-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <span className="text-sm font-semibold text-[#4f2d20]">
                    {r.author}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Кнопки як на скріні */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={prev}
              className="h-9 w-9 rounded-full border border-amber-200 bg-white text-[#4f2d20] hover:border-[#4f2d20] transition"
              aria-label="Previous reviews"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              className="h-9 w-9 rounded-full border border-amber-200 bg-white text-[#4f2d20] hover:border-[#4f2d20] transition"
              aria-label="Next reviews"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
