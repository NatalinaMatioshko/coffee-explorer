import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoriteItem = {
  id: number;
  title: string;
  type: "drink" | "bean";
};

type FavoritesState = {
  items: FavoriteItem[];
  toggleFavorite: (item: FavoriteItem) => void;
  isFavorite: (id: number) => boolean;
  clearFavorites: () => void;
};

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      items: [],

      toggleFavorite(item) {
        const { items } = get();
        const exists = items.some((i) => i.id === item.id);
        set({
          items: exists
            ? items.filter((i) => i.id !== item.id)
            : [...items, item],
        });
      },

      isFavorite(id) {
        return get().items.some((i) => i.id === id);
      },

      clearFavorites() {
        set({ items: [] });
      },
    }),
    {
      name: "favorites-store",
    }
  )
);
