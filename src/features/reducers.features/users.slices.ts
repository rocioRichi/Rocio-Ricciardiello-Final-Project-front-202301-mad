import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginStructure, RegisterStructure } from "../../models/users";

export type State = {
  userLogged: LoginStructure;
  users: LoginStructure[];
};
const initialState: State = {
  userLogged: {} as LoginStructure,
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register(state, action: PayloadAction<RegisterStructure>) {
      state.users = [...state.users, action.payload];
    },
    login(state, action: PayloadAction<LoginStructure>) {
      state.userLogged = action.payload;
    },
  },
});

export const { register, login } = userSlice.actions;

export const userReducer = userSlice.reducer;
