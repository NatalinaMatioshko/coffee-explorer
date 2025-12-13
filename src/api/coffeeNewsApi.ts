export type CoffeeNewsItem = {
  id: string;
  title: string;
  link: string;
  date?: string;
  source?: string;
  imageUrl?: string;
};

const FEEDS = [
  { name: "Perfect Daily Grind", url: "https://perfectdailygrind.com/feed" },
  { name: "Barista Magazine", url: "https://baristamagazine.com/feed" },
  { name: "Coffee Geek", url: "https://coffeegeek.com/feed/" },
  { name: "Daily Coffee News", url: "https://dailycoffeenews.com/feed/" },
];

function viaAllOrigins(url: string) {
  return `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
}

// fallback: іконка сайту (працює майже завжди)
function faviconFromLink(link: string) {
  try {
    const host = new URL(link).hostname;
    // простий публічний сервіс іконок
    return `https://www.google.com/s2/favicons?domain=${host}&sz=128`;
  } catch {
    return undefined;
  }
}

function pickImageUrl(item: Element): string | undefined {
  // 1) media:content / media:thumbnail (namespace важливий, тому читаємо через querySelector з екрануванням)
  const mediaContent =
    item.querySelector("media\\:content")?.getAttribute("url") ||
    item.querySelector("media\\:thumbnail")?.getAttribute("url");

  if (mediaContent) return mediaContent;

  // 2) enclosure
  const enclosure = item.querySelector("enclosure");
  const encUrl = enclosure?.getAttribute("url") || undefined;
  const encType = enclosure?.getAttribute("type") || "";
  if (encUrl && encType.startsWith("image/")) return encUrl;

  // 3) first <img src="..."> inside content/description (HTML може бути екранований)
  const html =
    item.querySelector("content\\:encoded")?.textContent ||
    item.querySelector("description")?.textContent ||
    "";

  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (match?.[1]) return match[1];

  return undefined;
}

export async function getCoffeeNews(limit = 12): Promise<CoffeeNewsItem[]> {
  const results = await Promise.allSettled(
    FEEDS.map(async (f) => {
      const res = await fetch(viaAllOrigins(f.url));
      if (!res.ok) throw new Error(`Failed: ${f.name}`);

      const xmlText = await res.text();
      const doc = new DOMParser().parseFromString(xmlText, "text/xml");
      const items = Array.from(doc.querySelectorAll("item")).slice(0, 12);

      return items.map((item, idx) => {
        const title =
          item.querySelector("title")?.textContent?.trim() ?? "Untitled";
        const link = item.querySelector("link")?.textContent?.trim() ?? "#";
        const date = item.querySelector("pubDate")?.textContent?.trim();

        const imageUrl = pickImageUrl(item) ?? faviconFromLink(link);

        return {
          id: `${f.name}-${idx}-${link}`,
          title,
          link,
          date,
          source: f.name,
          imageUrl,
        } as CoffeeNewsItem;
      });
    })
  );

  const merged = results
    .filter(
      (r): r is PromiseFulfilledResult<CoffeeNewsItem[]> =>
        r.status === "fulfilled"
    )
    .flatMap((r) => r.value);

  merged.sort(
    (a, b) => (Date.parse(b.date ?? "") || 0) - (Date.parse(a.date ?? "") || 0)
  );

  return merged.slice(0, limit);
}
