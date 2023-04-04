import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import { gettechpost } from "../postulation/gettechpost";
import { getclientpost } from "../postulation/getclientpostulation";
const initialState = {
  user: null,
  token: null,
  error: null,
  loading: false,
  id: null,
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
      state.user = action.payload.usertype;
      state.token = action.payload.token;
      state.id = action.payload.id;
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

export const login = (formData) => async (dispatch,getState) => {
  dispatch(loginRequest());

  try {
    const res = await axios.post("http://localhost:3001/api/users/login", formData);
    await dispatch(loginSuccess(res.data));
 
    if (getState().login.user === 'client') {
      console.log('Dispatching getclientpost');
      dispatch(getclientpost(res.data.id));
    } else {
      console.log('Dispatching gettechpost');
      dispatch(gettechpost(res.data.id));
    }
  } catch (err) {
    dispatch(loginFailure(err.response.data.message));
  }
};

export const { loginRequest, loginSuccess, loginFailure, logout } = loginSlice.actions;

export default loginSlice;
