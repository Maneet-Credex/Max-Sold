import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/DataSlice";

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});

export default store;
