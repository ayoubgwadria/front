import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import cartUiSlice from "./cart/cartUiSlice";
import RegisterSlice from "./auth/RegisterSlice";
import LoginSlice from "./auth/LoginSlice";
import UserTypeSlice from "./props/Isclient";
import addpostSlice from "./post/addpost";
import getallpostsSlice from "./post/getallposts";
import getpostSlice from "./post/getpost";
import getalltechniciensSlice from "./technicien/getalltechniciens";
import getprofileSlice from "./technicien/gettechnicien"
import RegisterDataSlice from "./props/registerdata";
import addprofileSlice from "./profile/addprofile";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
    register: RegisterSlice.reducer,
    login: LoginSlice.reducer,
    UserType: UserTypeSlice.reducer,
    registerData: RegisterDataSlice.reducer,
    AddPost: addpostSlice.reducer,
    getposts: getallpostsSlice.reducer,
    getpost: getpostSlice.reducer,
    gettechniciens: getalltechniciensSlice.reducer,
    technicienprofile: getprofileSlice.reducer,
    addprofile: addprofileSlice.reducer,
  },
});

export default store;
