import { createSlice } from "@reduxjs/toolkit";

const initialState = null;
const launchpadsSlice = createSlice({
  name: "launchpads",
  initialState,
  reducers: {
    addLaunchpads(_, action) {
      return action.payload;
    },
  },
});

export const { addLaunchpads } = launchpadsSlice.actions;
export default launchpadsSlice.reducer;
