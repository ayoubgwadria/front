import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  loading: false,
  error: null,
  successMessage: null,
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
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});


export const register = (formData,navigate) => async (dispatch) => {
  dispatch(registerStart());

  try {
    const res = await axios.post("http://localhost:3001/api/users/register", formData);
    dispatch(registerSuccess(res.data.message));
    navigate("/login")
  } catch (err) {
    dispatch(registerFailure(err.response.data.message));
  }
};
export const { registerStart, registerSuccess, registerFailure } = registerSlice.actions;
export default registerSlice;