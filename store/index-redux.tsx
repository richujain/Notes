import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./notes-slice";

const store = configureStore({
    reducer: notesSlice.reducer
})
export default store;