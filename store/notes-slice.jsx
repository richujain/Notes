import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notesSlice",
  initialState: {
    notes: [],
  },
  reducers: {
    updateNotes(state, action) {
      state.notes = action.payload || []
    },
    addToNotes(state, action) {
      state.notes.push({
        id: action.payload.id,
        title: action.payload.title,
        body: action.payload.body,
        color: action.payload.color
      })
    }
  },
});
export const noteActions = notesSlice.actions;
export default notesSlice;
