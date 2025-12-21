import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFavoritesStore } from "../store/useFavoritesStore";
import ProductReviews from "../sections/ProductReviews";
import YouMayAlsoLike from "../sections/YouMayAlsoLike";

type Drink = {
  id: number;
  title: string;
  method: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  image?: string;
};

type Bean = {
  id: number;
  name: string;
  country: string;
  roast_level: string;
  process_method: string;
  quantity: number;
  image?: string;
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
  const { toggleFavorite, isFavorite } = useFavoritesStore();

  const [data, setData] = useState<Drink | Bean | null>(null);
  const [loading, setLoading] = useState(true);

  const url = useMemo(() => {
    return type === "drink"
      ? "/coffee-explorer/recipes.json"
      : "/coffee-explorer/beans.json";
  }, [type]);

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

  const [size, setSize] = useState<number>(250);

  useEffect(() => {
    if (!sizes.length) return;
    setSize((prev) => (sizes.includes(prev) ? prev : sizes[0]));
  }, [sizes]);

  const imageSrc = useMemo(() => {
    if (!data?.image) return "";
    return `${import.meta.env.BASE_URL}${data.image}`;
  }, [data]);

  const favorite = data ? isFavorite(data.id) : false;

  if (loading) return <p className="p-10 text-[#4f2d20]">Loading…</p>;
  if (!data) return <p className="p-10 text-red-600">Product not found</p>;

  return (
    <div className="pt-10 min-h-screen bg-[#f9f3e9]">
      <div className="mx-auto max-w-360 px-4 pt-24 pb-16">
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

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={title}
                className="block w-full h-auto"
                loading="lazy"
              />
            ) : (
              <div className="p-10 text-sm text-neutral-500">No image</div>
            )}
          </div>

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

            <div className="mt-6 flex items-center gap-4">
              <button
                type="button"
                className="h-12 rounded-xl bg-[#4f2d20] px-8 text-sm text-[#fefbf3] transition hover:opacity-90"
                onClick={() => {
                  alert("Add to cart - implement cart store");
                }}
              >
                Add to cart
              </button>

              <button
                type="button"
                aria-label="Add to favorites"
                onClick={() => toggleFavorite({ id: data.id, title, type })}
                className={[
                  "flex h-12 w-12 items-center justify-center rounded-xl border transition",
                  favorite
                    ? "border-[#b35b3e] bg-[#b35b3e] text-white"
                    : "border-amber-200 text-[#4f2d20] hover:border-[#4f2d20]",
                ].join(" ")}
              >
                ♥
              </button>
            </div>

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

        <ProductReviews />
        <YouMayAlsoLike />
      </div>
    </div>
  );
}
