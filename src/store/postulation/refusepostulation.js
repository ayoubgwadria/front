import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {getclientpost} from "./getclientpostulation";

const initialState = {
  loading: false,
  error: null,
  successMessage: null,
};

export const refusepostulationSlice = createSlice({
  name: "refusepostulation",
  initialState,
  reducers: {
    refusepostulationStart: (state) => {
      state.loading = true;
      state.error = null;
      state.successMessage = null;
    },
    refusepostulationSuccess: (state, action) => {
      state.loading = false;
      state.successMessage = action.payload;
      state.error = null;
    },
    refusepostulationFailure: (state, action) => {
      state.loading = false;
      state.successMessage = null;
      state.error = action.payload;
    },
  },
});

export const { refusepostulationStart, refusepostulationSuccess, refusepostulationFailure } = refusepostulationSlice.actions;

export const refusepostulation = (id) => async (dispatch) => {
  dispatch(refusepostulationStart());
  try {
    const res = await axios.put(`http://localhost:3001/api/postulations/${id}/refuse`);
    dispatch(refusepostulationSuccess({ message: res.data.message, postulation: res.data.postulation })); 
    dispatch(getclientpost(res.data.postulation.clientId))
  } catch (err) {
    dispatch(refusepostulationFailure(err.res.data.message));
  }
};

export default refusepostulationSlice;
