import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-autenthicated",
    uid: null,
    email: null,
    diplayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "autenthicated";
      state.uid = payload.uid;
      state.email = payload.email;
      state.diplayName = payload.diplayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },

    logout: (state, { payload }) => {
      state.status = "not-autenthicated";
      state.uid = null;
      state.email = null;
      state.diplayName = null;
      state.photoURL = null;
      state.errorMessage = payload.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});
export const { login, logout, checkingCredentials } = authSlice.actions;
