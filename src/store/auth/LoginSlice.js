import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
  user: null,
  token: null,
  error: null,
  loading: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.user = null;
      state.token = null;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    }
  },
});

export const login = (formData,callback) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const res = await axios.post("http://localhost:3001/api/users/login", formData);
    dispatch(loginSuccess({ user: res.data.user, token: res.data.token }));
    callback();
  } catch (err) {
    dispatch(loginFailure(err.response.data.message));
  }
};

export const { loginRequest, loginSuccess, loginFailure, logout } = loginSlice.actions;

export default loginSlice;
