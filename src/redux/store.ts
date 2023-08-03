import { configureStore } from "@reduxjs/toolkit";
// Reducers
import productModalReducer from "./modal/productModalSlice";

const store = configureStore({
  reducer: {
    productModal: productModalReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
