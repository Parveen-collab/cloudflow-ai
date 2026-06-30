import { DummyProductsResponse } from "@/src/types/api";

const BASE_URL = "https://dummyjson.com";

export async function fetchProducts() {
  const response = await fetch(
    `${BASE_URL}/products?limit=6`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json() as Promise<DummyProductsResponse>;
}