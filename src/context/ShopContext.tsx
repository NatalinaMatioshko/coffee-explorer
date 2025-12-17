import { createContext, useContext, useMemo, useState } from "react";

type Item = {
  id: string;
  title: string;
};

type ShopContextType = {
  cart: Item[];
  favorites: Item[];
  addToCart: (item: Item) => void;
  toggleFavorite: (item: Item) => void;
};

const ShopContext = createContext<ShopContextType | null>(null);

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Item[]>([]);
  const [favorites, setFavorites] = useState<Item[]>([]);

  const addToCart = (item: Item) => setCart((prev) => [...prev, item]);

  const toggleFavorite = (item: Item) =>
    setFavorites((prev) =>
      prev.some((i) => i.id === item.id)
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, item]
    );

  const value = useMemo(
    () => ({ cart, favorites, addToCart, toggleFavorite }),
    [cart, favorites]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be inside ShopProvider");
  return ctx;
}
