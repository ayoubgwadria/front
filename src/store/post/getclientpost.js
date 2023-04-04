import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  posts: [],
};

export const getclientpostSlice = createSlice({
  name: "getclientpost",
  initialState,
  reducers: {
    getclientpostStart: (state) => {
      state.loading = true;
      state.error = null;
      state.posts = null;
    },
    getclientpostSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.posts = action.payload;
    },
    getclientpostFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.posts= null;
    },
  },
});

export const { getclientpostStart, getclientpostSuccess, getclientpostFailure } = getclientpostSlice.actions;

export const getclientpost = (clientId) => async (dispatch) => {
  dispatch(getclientpostStart());
  try {
    const response = await axios.get(`http://localhost:3001/api/post/getclientpost/${clientId}`);
    dispatch(getclientpostSuccess(response.data.data));
  } catch (error) {
    dispatch(getclientpostFailure(error.res.data.message));
  }
};

export default getclientpostSlice;
