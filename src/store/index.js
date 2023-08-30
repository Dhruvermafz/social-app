import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";

export const store = configureStore(
  { reducer: rootReducer, middleware: [reduxThunk] },
  { ...window.__PRELOADED_STATE__ }
);
