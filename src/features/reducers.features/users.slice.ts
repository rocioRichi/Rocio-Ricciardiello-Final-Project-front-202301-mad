import { createSlice } from "@reduxjs/toolkit";
import { RegisterStructure } from "../../models/users";

export type State = {
  userLogged: RegisterStructure;
};
const initialState: State = {
  userLogged: {} as RegisterStructure,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // login(state, action: PayloadAction<LoginStructure>) {
    //   debugger;
    //   state.userLogged = action.payload;
    // },
  },
});

// export const { register } = userSlice.actions;

export const userReducer = userSlice.reducer;
