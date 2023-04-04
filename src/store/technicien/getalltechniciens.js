import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    loading: null,
    techniciens:[],
    error: null,
};

export const getalltechniciensSlice = createSlice({
    name: "getalltechniciens",
    initialState,
    reducers: {
        getalltechniciensStart: (state) => {
            state.loading = true;
            state.error = null;
            state.techniciens = [];
        },
        getalltechniciensSuccess: (state, action) => {
            state.loading = null;
            state.error = null;
            state.techniciens = action.payload;
        },
        getalltechniciensFailure: (state, action) => {
            state.loading = true;
            state.error = action.payload;
            state.techniciens = [];
        },

    }
});

export const { getalltechniciensStart, getalltechniciensSuccess, getalltechniciensFailure } = getalltechniciensSlice.actions;

export const getalltechniciens = () => async (dispatch) => {
    dispatch(getalltechniciensStart());
    try {
        const response = await axios.get(`http://localhost:3001/api/profile/findAllProfile`);
        dispatch(getalltechniciensSuccess(response.data));
    } catch (error) {
        dispatch(getalltechniciensFailure(error.res.data.message));
    }
}
export default getalltechniciensSlice;