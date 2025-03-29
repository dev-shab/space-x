import { createSlice } from "@reduxjs/toolkit";

const initialState = null;
const rocketsSlice = createSlice({
  name: "rockets",
  initialState,
  reducers: {
    addRockets(_, action) {
      return action.payload;
    },
  },
});

export const { addRockets } = rocketsSlice.actions;
export default rocketsSlice.reducer;
