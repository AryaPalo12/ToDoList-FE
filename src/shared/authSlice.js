import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    number: null,
    user_id: null,
    token: null,
  },
  name: "Modal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    //reducer for login
    setLogin: (state, token) => {
      state.isLoggedIn = true;
      state.token = token.payload;
    },
    setUser: (state, number) => {
      state.number = number.payload;
    },
    setId: (state, id) => {
      state.user_id = id.payload;
    },
    // reducer to update logged in to false and remove jwt
    setLogout: (state, action) => {
      state.isLoggedIn = false;
      state.user_id = null;
      state.number = null;
      state.token = "Logged Out";
    },
    setOpenModal: (state, action) => {
      state.isOpen = true;
    },
    setCloseModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { setLogin, setLogout, setOpenModal, setCloseModal, setId,setUser } =
  authSlice.actions;
export default authSlice.reducer;
