import { createSlice } from "@reduxjs/toolkit";

const initialState = null;
const payloadsSlice = createSlice({
  name: "payloads",
  initialState,
  reducers: {
    addPayloads(_, action) {
      return action.payload;
    },
  },
});

export const { addPayloads } = payloadsSlice.actions;
export default payloadsSlice.reducer;
