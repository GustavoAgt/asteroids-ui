import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: {
  showDateFilter: boolean;
} = {
  showDateFilter: false,
};

const filterSlice = createSlice({
  name: "dateFilter",
  initialState,
  reducers: {
    setFilterState: (state, action: PayloadAction<{ showDateFilter: boolean }>) => {
      state.showDateFilter = action.payload.showDateFilter;
    },
  },
});

export default filterSlice.reducer;
export const getDateFilterState = (state: RootState) => state.filterDate;
export const { setFilterState } = filterSlice.actions;
