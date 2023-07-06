import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    counter: store.getState().counter,
  });
});

export default store;
