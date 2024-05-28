import { configureStore } from "@reduxjs/toolkit";
import ships from "./shipReducers"
import boards from "./boardsReducers"


export const store = configureStore({
    reducer: {
        ships: ships,
        boards: boards
    }
});
