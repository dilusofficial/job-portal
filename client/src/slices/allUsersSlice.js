import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

const allUserSSlice = createSlice({
  name: "allUsers",
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
});

export default allUserSSlice.reducer;
export const { setUserInfo } = allUserSSlice.actions;
