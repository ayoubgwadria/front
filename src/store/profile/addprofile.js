import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    loading: false,
    error: null,
    successMessage: null,
};

export const addprofileSlice = createSlice({
    name: "addprofile",
    initialState,
    reducers: {
        addprofileStart: (state) => {
            state.loading = true;
            state.error = null;
            state.successMessage = null;
        },
        addprofileSuccess: (state, action) => {
            state.loading = false;
            state.successMessage = action.payload;
            state.error = null;
        },
        addprofileFailure: (state, action) => {
            state.loading = false;
            state.successMessage = null;
            state.error = action.payload;
        },
    }

});


export const addprofile = (ProfileData) => async (dispatch) => {
    dispatch(addprofileStart());
    try {
      const res = await axios.post("http://localhost:3001/api/profile/add", ProfileData);
      dispatch(addprofileSuccess(res.data.message));
    } catch (err) {
      dispatch(addprofileFailure(err.response.data.message));
    }
  };
export const { addprofileStart, addprofileSuccess, addprofileFailure } = addprofileSlice.actions;
export default addprofileSlice;