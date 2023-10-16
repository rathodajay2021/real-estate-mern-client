import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: localStorage.getItem("accessToken") || "",
  userInfo: JSON.parse(localStorage.getItem("userInfo")) || {},
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login: (state, data) => {
      const accessToken = data?.payload.accessToken;
      localStorage.setItem("accessToken", accessToken);
      delete data?.payload.accessToken;
      state.accessToken = accessToken;
      state.userInfo = data?.payload;
      localStorage.setItem("userInfo", JSON.stringify(data?.payload));
      localStorage.setItem('isLoggedIn', true);
    },
    logout: (state) => {
      state.accessToken = "";
      state.userInfo = {};
      localStorage.clear();
    },
  },
});

export const { login, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
