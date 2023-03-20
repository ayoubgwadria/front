import { createSlice } from "@reduxjs/toolkit";

const RegisterDataSlice = createSlice({
  name: "RegisterData",
  initialState: {
    data: [],
  },
  reducers: {
    SetRegisterData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { SetRegisterData } = RegisterDataSlice.actions;

export default  RegisterDataSlice;
