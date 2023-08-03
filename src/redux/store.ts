import { configureStore } from "@reduxjs/toolkit";
// Reducers
import productModalReducer from "./modal/productModalSlice";
import cartReducer from "./cart/cartSlice";

const store = configureStore({
  reducer: {
    productModal: productModalReducer,
    cart: cartReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
