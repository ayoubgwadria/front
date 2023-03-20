import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  profile: null,
};

export const getprofileSlice = createSlice({
  name: "getprofile",
  initialState,
  reducers: {
    getprofileStart: (state) => {
      state.loading = true;
      state.error = null;
      state.profile = null;
    },
    getprofileSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.profile = action.payload;
    },
    getprofileFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.profile = null;
    },
  },
});

export const { getprofileStart, getprofileSuccess, getprofileFailure } = getprofileSlice.actions;

export const getprofile = (profileId) => async (dispatch) => {
  dispatch(getprofileStart());
  try {
    const response = await axios.get(`http://localhost:3001/api/users/me/${profileId}`);
    dispatch(getprofileSuccess(response.data));
  } catch (error) {
    dispatch(getprofileFailure(error.res.data.message));
  }
};

export default getprofileSlice;
