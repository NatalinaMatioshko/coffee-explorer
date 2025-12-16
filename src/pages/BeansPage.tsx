import { useEffect, useState } from "react";
import { getProducts, type CoffeeProduct } from "../api/coffeeProductsApi";

const BeansPage = () => {
  const [items, setItems] = useState<CoffeeProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getProducts();
        setItems(data);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Error");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen bg-[#fefbf3] px-4 py-20">
      <h1 className="text-4xl text-[#4f2d20] font-bold">Beans</h1>

      {loading && <p className="mt-6">Loading…</p>}
      {error && <p className="mt-6 text-red-600">{error}</p>}

      {!loading && !error && (
        <ul className="mt-6 list-disc pl-6">
          {items.slice(0, 10).map((p) => (
            <li key={p.id}>{p.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BeansPage;
