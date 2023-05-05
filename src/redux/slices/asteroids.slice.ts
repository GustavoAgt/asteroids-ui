import { Neo } from "@ast/request/type/asteroids";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: {
  asteroids: Neo[];
} = {
  asteroids: [],
};

const neoSlice = createSlice({
  name: "neo",
  initialState,
  reducers: {
    setAsteroids: (state, action: PayloadAction<{ asteroids: Neo[] }>) => {
      state.asteroids = action.payload.asteroids;
    },
  },
});

export const getNeosValue = (state: RootState) => state.neo;
export const { setAsteroids } = neoSlice.actions;
export default neoSlice.reducer;
