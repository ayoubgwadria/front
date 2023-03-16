import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import cartUiSlice from "./cart/cartUiSlice";
import RegisterSlice from "./auth/RegisterSlice";
import LoginSlice from "./auth/LoginSlice";
import UserTypeSlice from "./reducers/Isclient";
import addpostSlice from "./post/addpost";
import getallpostsSlice from "./post/getallposts";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
    register: RegisterSlice.reducer,
    login: LoginSlice.reducer,
    UserType: UserTypeSlice.reducer,
    AddPost: addpostSlice.reducer,
    getposts: getallpostsSlice.reducer,
  },
});

export default store;
