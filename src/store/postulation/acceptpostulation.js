import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getclientpostulations } from "./getclientpostulation";

const initialState = {
  loading: false,
  error: null,
  successMessage: null,
};

export const acceptpostulationSlice = createSlice({
  name: "acceptpostulation",
  initialState,
  reducers: {
    acceptpostulationStart: (state) => {
      state.loading = true;
      state.error = null;
      state.successMessage = null;
    },
    acceptpostulationSuccess: (state, action) => {
      state.loading = false;
      state.successMessage = action.payload;
      state.error = null;
    },
    acceptpostulationFailure: (state, action) => {
      state.loading = false;
      state.successMessage = null;
      state.error = action.payload;
    },
  },
});

export const { acceptpostulationStart, acceptpostulationSuccess, acceptpostulationFailure } = acceptpostulationSlice.actions;

export const acceptpostulation = (id) => async (dispatch) => {
  dispatch(acceptpostulationStart());
  try {
    const res = await axios.put(`http://localhost:3001/api/postulations/${id}/accept`);
    dispatch(acceptpostulationSuccess({ message: res.data.message, postulation: res.data.postulation }));
    dispatch(getclientpostulations(res.data.postulation.clientId))
  } catch (err) {
    dispatch(acceptpostulationFailure(err.res.data.message));
  }
};

export default acceptpostulationSlice;
