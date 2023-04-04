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
import RegisterDataSlice from "./props/registerdata";
import addprofileSlice from "./profile/addprofile";
import getprofileSlice from "./profile/getprofile";
import getclientpostSlice from "./post/getclientpost";
import addpostulationSlice from "./postulation/addpostulation";
import gettechpostSlice from "./postulation/gettechpost";
import getclientpostulationSlice from "./postulation/getclientpostulation";
import acceptpostulationSlice from "./postulation/acceptpostulation";
import refusepostulationSlice from "./postulation/refusepostulation";


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
    addprofile: addprofileSlice.reducer,
    getprofile: getprofileSlice.reducer,
    getclientpost: getclientpostSlice.reducer,
    addpostulation: addpostulationSlice.reducer,
    techpostulation: gettechpostSlice.reducer,
    clientpostulation:getclientpostulationSlice.reducer,
    acceptpostulation:acceptpostulationSlice.reducer,
    refusepostulation:refusepostulationSlice.reducer,
  },
});

export default store;
