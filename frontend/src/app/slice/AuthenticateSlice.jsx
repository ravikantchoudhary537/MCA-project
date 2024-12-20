import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticate: false,
}

export const AuthenticateSlice = createSlice({
  name: "authenticate",
  initialState,
  reducers: {
    isAuthenticate: (state) => {
      state.authenticate = !state.authenticate;
    },
  },
});

export const { isAuthenticate } = AuthenticateSlice.actions;
export default AuthenticateSlice.reducer;
