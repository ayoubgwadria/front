import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  post: null,
};

export const getpostSlice = createSlice({
  name: "getpost",
  initialState,
  reducers: {
    getpostStart: (state) => {
      state.loading = true;
      state.error = null;
      state.post = null;
    },
    getpostSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.post = action.payload;
    },
    getpostFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.post = null;
    },
  },
});

export const { getpostStart, getpostSuccess, getpostFailure } = getpostSlice.actions;

export const getpost = (postId) => async (dispatch) => {
  dispatch(getpostStart());
  try {
    const response = await axios.get(`http://localhost:3001/api/post/getpost/${postId}`);
    dispatch(getpostSuccess(response.data));
  } catch (error) {
    dispatch(getpostFailure(error.res.data.message));
  }
};

export default getpostSlice;
