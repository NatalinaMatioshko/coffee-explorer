import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useFavoritesStore } from "../store/useFavoritesStore";

// Типи для Drink та Bean
type Drink = {
  id: number;
  title: string;
  desc: string;
  ingredients: string[];
  image?: string;
  category: "hot" | "iced";
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

type CoffeeCardProps = {
  item: Drink | Bean;
  type: "drink" | "bean";
};

const CoffeeCard: React.FC<CoffeeCardProps> = ({ item, type }) => {
  const { toggleFavorite, isFavorite } = useFavoritesStore();

  const id = item.id;
  const title = "title" in item ? item.title : item.name;
  const favorite = isFavorite(id);

  const imageSrc = item.image ?? "";

  const shortText =
    "desc" in item
      ? item.desc
      : `${item.country} • ${item.roast_level} • ${item.process_method}`;

  const detailsLink =
    type === "drink" ? `/menu/${item.id}` : `/beans/${item.id}`;

  return (
    <article className="relative rounded-2xl border border-amber-100 bg-white p-6 shadow-sm transition hover:shadow-md flex flex-col h-full">
      {/* Heart */}
      <button
        type="button"
        onClick={() => toggleFavorite({ id, title, type })}
        className="absolute right-4 top-4 text-xl"
        aria-label="Toggle favorite"
      >
        <FaHeart className={favorite ? "text-[#b35b3e]" : "text-neutral-300"} />
      </button>

      {/* Image */}
      {imageSrc ? (
        <div className="mb-4 overflow-hidden rounded-xl border border-amber-100 bg-amber-50">
          <img
            src={imageSrc}
            alt={title}
            className="h-44 w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : null}

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-xl font-semibold text-[#4f2d20]">{title}</h2>
          {"category" in item ? (
            <span className="rounded-full border border-amber-200 px-3 py-1 text-xs text-[#4f2d20]">
              {item.category}
            </span>
          ) : null}
        </div>

        <p className="mt-3 text-sm text-neutral-700 line-clamp-3">
          {shortText}
        </p>

        <Link
          to={detailsLink}
          className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-xl bg-[#4f2d20] text-sm text-[#fefbf3] transition hover:opacity-90"
        >
          View details
        </Link>
      </div>
    </article>
  );
};

export default CoffeeCard;
