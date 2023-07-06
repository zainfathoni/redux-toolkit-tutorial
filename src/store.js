import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { loadState, saveState } from "./localStorage";
import { loggerMiddleware } from "./loggerMiddleware";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

store.subscribe(() => {
  saveState({
    counter: store.getState().counter,
  });
});

export default store;
