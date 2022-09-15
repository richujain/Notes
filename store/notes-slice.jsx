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
      
      const tempNotes = [...state.notes];
      tempNotes.unshift({
        id: action.payload.id,
        title: action.payload.title,
        body: action.payload.body,
        color: action.payload.color,
        localId: action.payload.localId
      })
      
      state.notes = [...tempNotes]

    },
    updateNoteById(state, action) {
      const tempNotes = {
        id: action.payload.id,
        title: action.payload.title,
        body: action.payload.body,
        color: action.payload.color,
        localId: action.payload.localId,
      };
      state.notes[
        state.notes.findIndex((note) => note.id === tempNotes.id)
      ] = tempNotes;
    }
  },
});
export const noteActions = notesSlice.actions;
export default notesSlice;
