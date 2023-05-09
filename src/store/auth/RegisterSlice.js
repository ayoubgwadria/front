import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  loading: false,
  error: null,
  successMessage: null,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerStart: (state) => {
      state.loading = true;
      state.error = null;
      state.successMessage = null;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.successMessage = action.payload;
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});


export const register = (FormData, navigate) => async (dispatch) => {
  dispatch(registerStart());

  try {
    console.log('this is the user', FormData.get('email'))
    const res = await axios.post("http://localhost:3001/api/users/register", FormData, {
      headers: {
        "Content-Type": 'multipart/form-data',
        "Email": FormData.get('email').split(".")[0]
      }

    });
    dispatch(registerSuccess(res.data.message));
    if (FormData.usertype === "client") {
      navigate("/login");
    } else if (FormData.usertype === "Technicien") {
      navigate("/login");
    }
  } catch (err) {
    dispatch(registerFailure(err.response));
  }
};
export const { registerStart, registerSuccess, registerFailure } = registerSlice.actions;
export default registerSlice;