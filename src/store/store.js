import { configureStore } from "@reduxjs/toolkit";
import ships from "./reducers"


export const store = configureStore({
    reducer: {
        ships: ships,
    }
});
