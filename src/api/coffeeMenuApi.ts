export type CoffeeDrink = {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  image?: string;
};

const BASE_URL = "https://api.sampleapis.com/coffee";

async function request<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

export function getHotDrinks() {
  return request<CoffeeDrink[]>("/hot");
}

export function getIcedDrinks() {
  return request<CoffeeDrink[]>("/iced");
}
