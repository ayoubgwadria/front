import { createSlice } from "@reduxjs/toolkit";

const UserTypeSlice = createSlice({
  name: "UserType",
  initialState: {
    isClient: "",
  },
  reducers: {
    SetUserType: (state, action) => {
      state.isClient = action.payload;
    },
  },
});

export const { SetUserType } = UserTypeSlice.actions;

export default  UserTypeSlice;
