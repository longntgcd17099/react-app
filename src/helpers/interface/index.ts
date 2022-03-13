export interface Product {
  id?: number;
  name: string;
  price: number;
  brandId: number;
  brandName?: string;
}
export interface Brand {
  id?: number;
  name: string;
}