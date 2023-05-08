import { Neo } from "@ast/request/type/asteroids";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type NeoDate = { from: Date | null; until: Date | null };

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

export default neoSlice.reducer;
export const { setAsteroids } = neoSlice.actions;
export const getNeosValue = (state: RootState) => state.neo;
