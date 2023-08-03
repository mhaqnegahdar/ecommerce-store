import { Product } from "@/types/data";

interface ModalState {
  isOpen: boolean;
}

interface ProductModalState {
  isOpen: boolean;
  product: Product | null;
}

type ProductModalPayload = Omit<ProductModalState, "isOpen">;

export type { ModalState, ProductModalState, ProductModalPayload };
