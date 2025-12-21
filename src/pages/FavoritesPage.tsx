import React from "react";
import CoffeeCard from "../components/CoffeeCard";
import { useFavoritesStore } from "../store/useFavoritesStore";
import type { Bean, BeanFromDb } from "./BeansPage";
import type { Drink, RecipeFromDb } from "./MenuPage";

// Імпорт JSON
import recipesJson from "../../public/recipes.json";
import beansJson from "../../public/beans.json";

// Перетворюємо JSON у доменні типи
const allDrinks: Drink[] = (recipesJson as RecipeFromDb[]).map((r) => ({
  id: r.id,
  title: r.title,
  desc: (r.description ?? "").trim() || "No description yet.",
  ingredients: Array.isArray(r.ingredients) ? r.ingredients : [],
  image: r.image ? `${import.meta.env.BASE_URL}${r.image}` : undefined,
  category:
    `${r.title} ${r.method}`.toLowerCase().includes("iced") ||
    `${r.title} ${r.method}`.toLowerCase().includes("cold")
      ? "iced"
      : "hot",
}));

const allBeans: Bean[] = (beansJson as BeanFromDb[]).map((b) => ({
  id: b.id,
  name: b.name,
  country: b.country,
  roast_level: b.roast_level,
  process_method: b.process_method,
  quantity: b.quantity,
  image: b.image ? `${import.meta.env.BASE_URL}${b.image}` : undefined,
}));

type FavoriteItem =
  | { type: "drink"; data: Drink }
  | { type: "bean"; data: Bean };

const FavoritesPage: React.FC = () => {
  const { items: favorites } = useFavoritesStore();

  // Фільтруємо drinks та beans на основі favorites
  const favoriteDrinks = allDrinks.filter((d) =>
    favorites.some((f) => f.id === d.id && f.type === "drink")
  );

  const favoriteBeans = allBeans.filter((b) =>
    favorites.some((f) => f.id === b.id && f.type === "bean")
  );

  // Об'єднуємо в один масив для відображення
  const items: FavoriteItem[] = [
    ...favoriteDrinks.map((d) => ({ data: d, type: "drink" as const })),
    ...favoriteBeans.map((b) => ({ data: b, type: "bean" as const })),
  ];

  return (
    <main className="min-h-screen bg-[#f9f3e9] pt-30 pb-16 px-4">
      <div className="max-w-360 mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4f2d20] mb-2">
          Your favorite coffee
        </h1>
        <p className="text-sm text-neutral-600 mb-8">
          All drinks and beans you have added to favorites.
        </p>

        {items.length === 0 ? (
          <p className="text-neutral-600">
            You don&apos;t have any favorites yet.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((item) => (
              <CoffeeCard
                key={`${item.type}-${item.data.id}`}
                item={item.data}
                type={item.type}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default FavoritesPage;
