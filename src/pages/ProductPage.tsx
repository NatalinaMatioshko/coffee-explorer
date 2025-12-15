import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductReviews from "../sections/ProductReviews";
import YouMayAlsoLike from "../sections/YouMayAlsoLike";

type Product = {
  id: string;
  title: string;
  priceUsd: number;
  rating: number; // 0..5
  reviewsCount: number;
  shortDesc: string;
  imageUrl: string;
  type: string;
  roast: string;
  country: string;
  method: string;
  preparation: Array<{ title: string; text: string }>;
  sizes: number[]; // grams
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
        className="w-full flex items-center justify-between text-left"
      >
        <span className="text-sm font-semibold tracking-wide text-[#4f2d20] uppercase">
          {title}
        </span>
        <span className="text-[#4f2d20]">{open ? "▴" : "▾"}</span>
      </button>

      {open ? <div className="pt-4">{children}</div> : null}
    </div>
  );
}

export default function ProductPage() {
  const { id = "1" } = useParams();

  // Тимчасово mock (потім замінимо на API)
  const product: Product = useMemo(
    () => ({
      id,
      title: "Santa Monica Filter",
      priceUsd: 12,
      rating: 5,
      reviewsCount: 5,
      shortDesc:
        "A rich, aromatic coffee with a smooth, high-altitude character. Balanced flavor with subtle sweetness and a warm, lasting finish.",
      imageUrl:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
      type: "Hot",
      roast: "Medium",
      country: "Brazil, Santa Monica",
      method: "Filter",
      sizes: [150, 200, 250, 300, 400],
      preparation: [
        {
          title: "Measure",
          text: "Use 18–22 g freshly ground coffee for one cup.",
        },
        {
          title: "Grind size",
          text: "Medium grind, ideal for V60, Chemex, or other pour-over methods.",
        },
        {
          title: "Water temperature",
          text: "Heat water to 92–96°C for clean and balanced extraction.",
        },
        {
          title: "Brew",
          text: "Pour slowly in circles. Total brew time: 2:45–3:15 min.",
        },
        {
          title: "Serve",
          text: "Enjoy hot for a smooth finish and clear sweetness.",
        },
      ],
    }),
    [id]
  );

  const [size, setSize] = useState<number>(
    product.sizes[2] ?? product.sizes[0]
  );
  const [liked, setLiked] = useState(false);

  return (
    <div className="min-h-screen bg-[#f9f3e9]">
      <div className="max-w-360 mx-auto px-4 pt-24 pb-16">
        {/* Breadcrumbs */}
        <div className="text-xs text-neutral-500 mb-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/beans" className="hover:underline">
            Hot Coffee
          </Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-700">{product.title}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: image */}
          <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-amber-100">
            <div className="aspect-4/3 w-full">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: details */}
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-wide text-[#4f2d20]">
              {product.title.toUpperCase()}
            </h1>

            <div className="mt-3 flex items-center gap-3">
              <Stars value={product.rating} />
              <span className="text-xs text-neutral-500">
                {product.reviewsCount} reviews
              </span>
            </div>

            <div className="mt-4 text-[#4f2d20] font-semibold">
              $ {product.priceUsd} USD
            </div>

            <p className="mt-4 text-sm leading-relaxed text-neutral-700 max-w-xl">
              {product.shortDesc}
            </p>

            {/* Size */}
            <div className="mt-6">
              <div className="flex items-center gap-2 text-sm text-neutral-700">
                <span className="font-semibold text-[#4f2d20]">Size</span>
                <span className="text-neutral-500">{size}g</span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((s) => {
                  const active = s === size;
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSize(s)}
                      className={[
                        "px-4 py-2 rounded-full border text-sm transition",
                        active
                          ? "bg-[#4f2d20] text-[#fefbf3] border-[#4f2d20]"
                          : "bg-transparent text-[#4f2d20] border-amber-200 hover:border-[#4f2d20]",
                      ].join(" ")}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex items-center gap-4">
              <button
                type="button"
                className="h-12 px-8 rounded-xl bg-[#4f2d20] text-[#fefbf3] hover:opacity-90 transition"
                onClick={() => {
                  // тут потім додамо в cart (localStorage / context)
                  alert(`Added to cart: ${product.title} (${size}g)`);
                }}
              >
                Add to cart
              </button>

              <button
                type="button"
                aria-label="Add to favorites"
                onClick={() => setLiked((v) => !v)}
                className={[
                  "h-12 w-12 rounded-xl border transition flex items-center justify-center",
                  liked
                    ? "border-[#4f2d20] bg-[#4f2d20] text-[#fefbf3]"
                    : "border-amber-200 text-[#4f2d20] hover:border-[#4f2d20]",
                ].join(" ")}
              >
                ♥
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <div className="space-y-3 text-sm text-neutral-700">
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-500 w-28">Type:</span>
                    <span className="text-[#4f2d20]">{product.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-500 w-28">Roast:</span>
                    <span className="text-[#4f2d20]">{product.roast}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-500 w-28">Country:</span>
                    <span className="text-[#4f2d20]">{product.country}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-500 w-28">Method:</span>
                    <span className="text-[#4f2d20]">{product.method}</span>
                  </div>
                </div>
              </Accordion>

              <Accordion title="Preparation Method" defaultOpen>
                <ol className="space-y-3 text-sm text-neutral-700 list-decimal pl-5">
                  {product.preparation.map((step, idx) => (
                    <li key={idx}>
                      <span className="font-semibold text-[#4f2d20]">
                        {step.title}:
                      </span>{" "}
                      {step.text}
                    </li>
                  ))}
                </ol>
              </Accordion>
            </div>
          </div>
        </div>
        <ProductReviews />
        <YouMayAlsoLike />
      </div>
    </div>
  );
}
