import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import { setLocalStorage, getLocalStorage } from "@/lib/localstorage";
// Types
import { AddCartPayload, RemoveCartPayload, CartState } from "@/types/states";
import { toast } from "react-hot-toast";

const lsName = "store-cart";
// Define the initial state using that type
const initialState = {
  items: getLocalStorage(lsName),
} as CartState;

export const cart = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Add Item to cart
    addToCart: (state, action: PayloadAction<AddCartPayload>) => {
      // Find if item already in cart
      const exists = state.items.findIndex(
        item => item.id === action.payload.item.id
      );

      if (exists >= 0) {
        // If item existed
        toast(`Item already in cart.`, { icon: "⚠️" });
      } else {
        // Add item to cart
        state.items.push(action.payload.item);
        setLocalStorage(lsName, state.items);
        toast.success(`Item added to cart.`);
      }
    },
    // Remove Item from cart
    removeFromCart: (state, action: PayloadAction<RemoveCartPayload>) => {
      // Find index of item to remove
      const indexToRemove = state.items.findIndex(
        item => item.id === action.payload.id
      );

      if (indexToRemove >= 0) {
        state.items.splice(indexToRemove, 1);
        setLocalStorage(lsName, state.items);
        toast.success(`Item remove from cart.`);
      }
    },
    emptyCart: state => {
      state.items = [];
      setLocalStorage(lsName, []);
    },
  },
});

export const { addToCart, emptyCart, removeFromCart } = cart.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectState = (state: RootState) => state.cart;

export default cart.reducer;
