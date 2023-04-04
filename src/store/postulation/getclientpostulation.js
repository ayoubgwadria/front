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
      state.error =null;
      state.posts = [];
    },
    getclientpostSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.posts = action.payload;
    },
    getclientpostFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.posts= [];
    },
  },
});

export const { getclientpostStart, getclientpostSuccess, getclientpostFailure } = getclientpostSlice.actions;

export const getclientpost = (clientId) => async (dispatch) => {
  dispatch(getclientpostStart());
  try {
    const response = await axios.get( `http://localhost:3001/api/postulations/postclient/${clientId}`);
    dispatch(getclientpostSuccess(response.data));
  } catch (error) {
    dispatch(getclientpostFailure(error.response.data.message));
  }
};

export default getclientpostSlice;
