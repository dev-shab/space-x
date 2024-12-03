import { configureStore } from "@reduxjs/toolkit";
import launchesSlice from "./launchesSlice";

const store = configureStore({
  reducer: {
    launchData: launchesSlice,
  },
});

export default store;
