export interface DummyProduct {
  id: number;
  title: string;
  price: number;
  rating: number;
  stock: number;
}

export interface DummyProductsResponse {
  products: DummyProduct[];
}