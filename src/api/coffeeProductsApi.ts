export type CoffeeProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  region?: string;
  roast_level?: string;
  flavor_profile?: string[];
  grind_option?: string[];
  weight?: number;
};

const BASE_URL = "https://fake-coffee-api.vercel.app";

async function request<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export async function getProducts() {
  const data = await request<unknown>("/");
  if (!Array.isArray(data)) {
    throw new Error("Unexpected response format");
  }
  return data as CoffeeProduct[];
}

export async function getProductById(id: number | string) {
  return request<CoffeeProduct>(`/${id}`);
}
