import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./filmSlice";

const store = configureStore({
    reducer: {
        films: filmsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
