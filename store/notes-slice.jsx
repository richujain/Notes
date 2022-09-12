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
        color: action.payload.color
      })
      
      console.log('state.tempnotes' + state.tempnotes)
      state.notes = [...tempNotes]
      console.log('state.notes' + state.notes)

    }
  },
});
export const noteActions = notesSlice.actions;
export default notesSlice;
