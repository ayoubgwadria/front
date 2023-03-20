import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  loading: false,
  error: null,
  successMessage: null,
  userId: null,
};
  
export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerStart: (state) => {
      state.loading = true;
      state.error = null;
      state.successMessage = null;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.successMessage = action.payload;
      state.userId = action.payload.userId;
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});


export const register = (FormData,navigate) => async (dispatch) => {
  dispatch(registerStart());

  try {
    const res = await axios.post("http://localhost:3001/api/users/register", FormData);
    dispatch(registerSuccess(res.data.message));
    if (FormData.usertype === "client") {
      navigate("/login");
    } else if (FormData.usertype === "Technicien") {
      navigate("/login");
    }
  } catch (err) {
    dispatch(registerFailure(err.response.data.message));
  }
};
export const { registerStart, registerSuccess, registerFailure } = registerSlice.actions;
export default registerSlice;