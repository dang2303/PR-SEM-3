import { configureStore } from "@reduxjs/toolkit";
import { shoppingCartReducer } from "./shoppingCartSlice";
import { userAuthReducer } from "./userAuthSlice";
import menuItemApi from "../../apis/menuItemApi";
import shoppingCartApi from "../../apis/shoppingCartApi";
import authApi from "../../apis/authApi";
import { menuItemReducer } from "./artWorkItemSlice";
const store = configureStore({
  reducer: {
    menuItemStore: menuItemReducer,
    shoppingCartStore: shoppingCartReducer,
    [menuItemApi.reducerPath]: menuItemApi.reducer,
    [shoppingCartApi.reducerPath]: shoppingCartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(menuItemApi.middleware)
      .concat(shoppingCartApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
