import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    loading: false,
    error: null,
    successMessage: null,
};

export const addpostSlice = createSlice({
    name: "addpost",
    initialState,
    reducers: {
        addpostStart: (state) => {
            state.loading = true;
            state.error = null;
            state.successMessage = null;
        },
        addpostSuccess: (state, action) => {
            state.loading = false;
            state.successMessage = action.payload;
            state.error = null;
        },
        addpostFailure: (state, action) => {
            state.loading = false;
            state.successMessage = null;
            state.error = action.payload;
        },
    }

});


export const addpost = (FormData) => async (dispatch) => {
    dispatch(addpostStart());
    try {
        const res = await axios.post("http://localhost:3001/api/post/add", FormData, {
            headers: { "Content-Type": 'multipart/form-data' }
        });
        dispatch(addpostSuccess(res.data.message));
    } catch (err) {
        dispatch(addpostFailure(err.response.data.message));
    }
};
export const { addpostStart, addpostSuccess, addpostFailure } = addpostSlice.actions;
export default addpostSlice;