export type NewsItem = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  content: string;
};

export async function getNews(): Promise<NewsItem[]> {
  const res = await fetch("/news.json");
  if (!res.ok) throw new Error("Failed to load news");
  const data = (await res.json()) as { news: NewsItem[] };
  return data.news;
}
