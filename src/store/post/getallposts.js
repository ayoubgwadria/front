import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: null,
    posts: [],
};

export const getallpostsSlice = createSlice({
    name: "getposts",
    initialState,
    reducer: {
        getallpostsStart: (state) => {
            state.loading = true;
            state.error = null;
            state.posts = [];
        },
        getallpostsSuccess: (state,action) => {
            state.loading = false;
            state.error = null;
            state.posts = action.payload;
        },
        getallpostsFailure: (state,action) => {
            state.loading = false;
            state.error = action.payload;
            state.posts = [];
        },
    }

});

export const { getallpostsStart, getallpostsSuccess, getallpostsFailure } = getallpostsSlice.actions;

export const getallposts = () => async (dispatch) => {
    dispatch (getallpostsStart());
    try {
        const response = await axios.get("http://localhost:3001/api/post/getAllPosts");
        dispatch (getallpostsSuccess(response.data));
    } catch (error) {
        dispatch (getallpostsFailure(error.res.data.message));
    }
}

export default getallpostsSlice;
