  import { createSlice } from "@reduxjs/toolkit";
  import axios from "axios";

  const initialState = {
    loading: false,
    error: null,
    posts: [],
  };

  export const gettechpostSlice = createSlice({
    name: "gettechpost",
    initialState,
    reducers: {
      gettechpostStart: (state) => {
        state.loading = true;
        state.error =null;
        state.posts = [];
      },
      gettechpostSuccess: (state, action) => {
        state.loading = false;
        state.error = null;
        state.posts = action.payload;
      },
      gettechpostFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.posts= [];
      },
    },
  });

  export const { gettechpostStart, gettechpostSuccess, gettechpostFailure } = gettechpostSlice.actions;

  export const gettechpost = (technicienId) => async (dispatch) => {
    dispatch(gettechpostStart());
    try {
      const response = await axios.get( `http://localhost:3001/api/postulations/posttech/${technicienId}`);
      dispatch(gettechpostSuccess(response.data));
    } catch (error) {
      dispatch(gettechpostFailure(error.response.data.message));
    }
  };

  export default gettechpostSlice;
