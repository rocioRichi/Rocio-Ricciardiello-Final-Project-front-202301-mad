import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginStructure, RegisterStructure } from "../../models/users";

export type StateStructure = {
  userLogged: RegisterStructure;
  token: string;
};
const initialState: StateStructure = {
  userLogged: {
    id: "",
    email: "mailinicial",
    firstName: "",
    lastName: "inicial",
    telephone: "inicial",
  } as RegisterStructure,
  token: "No token",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginToken(state: StateStructure, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    loginUser(state: StateStructure, action: PayloadAction<RegisterStructure>) {
      state.userLogged = action.payload;
    },
  },
});

// export const { register } = userSlice.actions;
export const { loginToken, loginUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
