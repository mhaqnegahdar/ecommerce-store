import { Product } from "@/types/data";

interface ModalState {
  isOpen: boolean;
}

interface ProductModalState {
  isOpen: boolean;
  product: Product | null;
}

interface CartState {
  items: Product[];
}

interface AddCartPayload {
  item: Product;
}
interface RemoveCartPayload {
  id: string;
}

type ProductModalPayload = Omit<ProductModalState, "isOpen">;

export type {
  ModalState,
  ProductModalState,
  ProductModalPayload,
  CartState,
  RemoveCartPayload,
  AddCartPayload,
};
