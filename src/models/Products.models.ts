export interface Product {
  id: number
  title: string
  price: number
  brand: string
  category: string
  images: string[]
};

export interface ApiResponse {
  products: Product[]
  total: number
};
