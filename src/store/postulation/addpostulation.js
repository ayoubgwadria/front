import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {gettechpost} from "./gettechpost";
import {getclientpost} from "./getclientpostulation";
const initialState = {
  loading: false,
  error: null,
  successMessage: null,
};

export const addpostulationSlice = createSlice({
  name: "addpostulation",
  initialState,
  reducers: {
    addpostulationStart: (state) => {
      state.loading = true;
      state.error = null;
      state.successMessage = null;
    },
    addpostulationSuccess: (state, action) => {
      state.loading = false;
      state.successMessage = action.payload;
      state.error = null;
    },
    addpostulationFailure: (state, action) => {
      state.loading = false;
      state.successMessage = null;
      state.error = action.payload;
    },
  },
});

export const { addpostulationStart, addpostulationSuccess, addpostulationFailure } = addpostulationSlice.actions;

export const addpostulation = (formData, postId, technicienId) => async (dispatch) => {
  dispatch(addpostulationStart());
  try {
    const res = await axios.post(
      `http://localhost:3001/api/postulations/postule/${postId}/${technicienId}`,
      formData
    );
    dispatch(addpostulationSuccess({ message: res.data.message, postulation: res.data.postulation })); 
    dispatch(gettechpost(technicienId))
  } catch (err) {
    dispatch(addpostulationFailure(err.response.data.message));
  }
};

export default addpostulationSlice;
