import { configureStore } from "@reduxjs/toolkit";
import launchesSlice from "./slices/launchesSlice";
import launchpadsSlice from "./slices/launchpadsSlice";
import rocketsSlice from "./slices/rocketsSlice";
import payloadsSlice from "./slices/payloadsSlice";

const appStore = configureStore({
  reducer: {
    launches: launchesSlice,
    launchpads: launchpadsSlice,
    rockets: rocketsSlice,
    payloads: payloadsSlice,
  },
});

export default appStore;
