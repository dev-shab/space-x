import { createSlice } from "@reduxjs/toolkit";

const initialState = null;
const launchesSlice = createSlice({
  name: "launches",
  initialState,
  reducers: {
    addLaunches(_, action) {
      return action.payload;
    },
  },
});

export const { addLaunches } = launchesSlice.actions;
export default launchesSlice.reducer;
