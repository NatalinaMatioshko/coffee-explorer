import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";

type Bean = {
  id: number;
  name: string;
  country: string;
  roast_level: string;
  process_method: string;
  quantity: number;
  image?: string;
};

const INITIAL_VISIBLE = 6;

export type BeanFromDb = Bean;
export type { Bean };
export default function BeansPage() {
  const [beans, setBeans] = useState<Bean[]>([]);
  const [loading, setLoading] = useState(true);

  const [roast, setRoast] = useState("all");
  const [country, setCountry] = useState("all");


  const [showAllByFilter, setShowAllByFilter] = useState<
    Record<string, boolean>
  >({});

  const [params] = useSearchParams();
  const query = (params.get("q") ?? "").toLowerCase().trim();

  useEffect(() => {
    fetch("/coffee-explorer/beans.json")
      .then((res) => res.json())
      .then((data: Bean[]) => setBeans(data))
      .finally(() => setLoading(false));
  }, []);

  const roasts = useMemo(
    () => Array.from(new Set(beans.map((b) => b.roast_level))),
    [beans]
  );

  const countries = useMemo(
    () => Array.from(new Set(beans.map((b) => b.country))),
    [beans]
  );

  const filtered = useMemo(() => {
    return beans.filter((b) => {
      const matchFilters =
        (roast === "all" || b.roast_level === roast) &&
        (country === "all" || b.country === country);

      const matchQuery =
        !query ||
        b.name.toLowerCase().includes(query) ||
        b.country.toLowerCase().includes(query) ||
        b.roast_level.toLowerCase().includes(query);

      return matchFilters && matchQuery;
    });
  }, [beans, roast, country, query]);

  const filterKey = `${roast}|${country}|${query}`;
  const showAll = !!showAllByFilter[filterKey];

  const visible = useMemo(() => {
    return showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);
  }, [filtered, showAll]);

  if (loading) {
    return <p className="p-10 text-[#4f2d20]">Loading beans…</p>;
  }

  return (
    <div className="min-h-screen pt-20 bg-[#fefbf3]">
      <div className="mx-auto max-w-360 px-4 py-20">
        <h1 className="mb-6 text-4xl font-bold text-[#4f2d20]">Coffee Beans</h1>


        <div className="mb-10 flex flex-wrap gap-4">
          <select
            value={roast}
            onChange={(e) => setRoast(e.target.value)}
            className="rounded border border-amber-200 bg-white px-4 py-2 text-sm"
          >
            <option value="all">All roasts</option>
            {roasts.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>

          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="rounded border border-amber-200 bg-white px-4 py-2 text-sm"
          >
            <option value="all">All countries</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

 
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((b) => (
            <CoffeeCard key={b.id} item={b} type="bean" />
          ))}
        </div>

       
        {!loading && filtered.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-amber-200 bg-white p-8 text-center text-[#4f2d20]">
            Nothing found. Try another search or filters.
          </div>
        ) : null}

   
        {filtered.length > INITIAL_VISIBLE ? (
          <div className="mt-12 text-center">
            {!showAll ? (
              <button
                onClick={() =>
                  setShowAllByFilter((prev) => ({ ...prev, [filterKey]: true }))
                }
                className="rounded-full border border-[#4f2d20] px-8 py-3 text-sm text-[#4f2d20] transition hover:bg-[#4f2d20] hover:text-[#fefbf3]"
              >
                Show more
              </button>
            ) : (
              <button
                onClick={() =>
                  setShowAllByFilter((prev) => ({
                    ...prev,
                    [filterKey]: false,
                  }))
                }
                className="rounded-full border border-[#4f2d20] px-8 py-3 text-sm text-[#4f2d20] transition hover:bg-[#4f2d20] hover:text-[#fefbf3]"
              >
                Show less
              </button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
