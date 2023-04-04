import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    loading: false,
    error: null,
    profile: [],
};

export const getprofileSlice = createSlice({
    name: "getprofile",
    initialState,
    reducers: {
        getprofileStart: (state) => {
            state.loading = true;
            state.error = null;
            state.profile = [];
        },
        getprofileSuccess: (state, action) => {
            state.loading = false;
            state.profile = action.payload;
            state.error = null;
        },
        getprofileFailure: (state, action) => {
            state.loading = false;
            state.profile = [];
            state.error = action.payload;
        },
    }

});

export const { getprofileStart, getprofileSuccess, getprofileFailure } = getprofileSlice.actions;

export const getprofile = (userId) => async (dispatch) => {
    dispatch(getprofileStart());
    try {
      const res = await axios.get(`http://localhost:3001/api/profile/getprofile/${userId}`);
      dispatch(getprofileSuccess(res.data));
    } catch (err) {
      dispatch(getprofileFailure(err.response.data.message));
    }
};

export default getprofileSlice;