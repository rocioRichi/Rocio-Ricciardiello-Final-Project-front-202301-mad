import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterStructure } from "../../models/users";

export type State = {
  userLogged: RegisterStructure;
  token: string;
};
const initialState: State = {
  userLogged: {
    email: "yo",
    firstName: "milibro",
    lastName: "milibro",
    telephone: "milibro",
    passwd: "milibro",
  } as RegisterStructure,
  token: "No token",
};

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
// login(state, action: PayloadAction<LoginStructure>) {
//   debugger;
//   state.userLogged = action.payload;
// },
//   },
// });
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginToken(state: State, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    // loginUser(state: UserStateStructure, action: PayloadAction<UserStructure>) {
    //   state.userLogged = action.payload;
    // },
  },
});

// export const { register } = userSlice.actions;
export const { loginToken } = userSlice.actions;
export const userReducer = userSlice.reducer;
