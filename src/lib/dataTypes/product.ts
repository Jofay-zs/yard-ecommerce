export interface Product {
  id: number;
  description: string;
  price: number;
  title: string;
  images: string[];
  category: ProductCategory;
}

export interface ProductCategory {
  id: number;
  name: string;
  image: string;
}
