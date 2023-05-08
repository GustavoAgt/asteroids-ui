import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import neoReducer from "./slices/asteroids.slice";
import filterReducer from "./slices/filter.slice";

export const store = configureStore({
  reducer: {
    neo: neoReducer,
    filterDate: filterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
