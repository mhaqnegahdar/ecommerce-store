import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";

// Types
import { ProductModalPayload, ProductModalState } from "@/types/states";
import { Product } from "@/types/data";

// Define the initial state using that type
const initialState = {
  isOpen: false,
  product: null,
} as ProductModalState;

export const productModal = createSlice({
  name: "productModal",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    onOpen: (state, action: PayloadAction<ProductModalPayload>) => {
      state.isOpen = true;
      state.product = action.payload.product;
    },
    onClose: state => {
      state.isOpen = false;
      state.product = null;
    },
  },
});

export const { onOpen, onClose } = productModal.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectState = (state: RootState) => state.productModal;

export default productModal.reducer;
