import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../features/reducers.features/users.slice";
import { livingSpaceReducer } from "../features/reducers.features/livingspace.slice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    livingSpaceState: livingSpaceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
