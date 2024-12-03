import { createSlice } from "@reduxjs/toolkit";

const launchesSlice = createSlice({
  name: "launchData",
  initialState: {
    launches: [],
    launchpads: [],
    payloads: [],
    rockets: [],
  },
  reducers: {
    addLaunchpads: (state, action) => {
      state.launchpads = action.payload;
    },
    addLaunches: (state, action) => {
      state.launches = action.payload;
    },
    addPayloads: (state, action) => {
      state.payloads = action.payload;
    },
    addRockets: (state, action) => {
      state.rockets = action.payload;
    },
  },
});

export const { addLaunches, addLaunchpads, addPayloads, addRockets } =
  launchesSlice.actions;
export default launchesSlice.reducer;
