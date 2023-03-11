import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import cartUiSlice from "./cart/cartUiSlice";
import RegisterSlice from "./auth/RegisterSlice";
import LoginSlice from "./auth/LoginSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
    register: RegisterSlice.reducer,
    login:LoginSlice.reducer,
   
  },
});

export default store;
