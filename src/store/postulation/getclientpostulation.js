import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  posts: [],
};

export const getclientpostulationSlice = createSlice({
  name: "getclientpost",
  initialState,
  reducers: {
    getclientpostulationStart: (state = initialState) => {

      state.loading = true;
      state.error = null;
      state.posts = [];
    },
    getclientpostulationSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.posts = action.payload;
    },
    getclientpostulationFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.posts = [];
    },
  },
});

export const { getclientpostulationStart, getclientpostulationSuccess, getclientpostulationFailure } = getclientpostulationSlice.actions;

export const getclientpostulations = (clientId) => async (dispatch) => {
  dispatch(getclientpostulationStart());
  try {
    const response = await axios.get(`http://localhost:3001/api/postulations/postclient/${clientId}`);
    console.log('responce data', response.data)
    dispatch(getclientpostulationSuccess(response.data));
  } catch (error) {
    dispatch(getclientpostulationFailure(error.response.data.message));
  }
};

export default getclientpostulationSlice;
