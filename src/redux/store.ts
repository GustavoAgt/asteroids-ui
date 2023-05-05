import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import neoReducer from "./slices/asteroids.slice";

export const store = configureStore({
  reducer: {
    neo: neoReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
