import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getNotesFromLocalStorage } from "./notesLocalStorage";

const noteStructure = {
  id: nanoid(),
  title: "Note title",
  text: "",
  date: new Date().toLocaleDateString(),
};

const noteSlice = createSlice({
  name: "notes",
  initialState: getNotesFromLocalStorage().map((note) => ({
    ...noteStructure,
    ...note,
  })),
  reducers: {
    addNote: (state, { payload }) => {
      state.push({ ...noteStructure, ...payload });
    },
    deleteNote: (state, { payload }) => {
      return state.filter((note) => note.id !== payload);
    },
  },
});

export const { addNote, deleteNote } = noteSlice.actions;
export const selectNotes = (state) => state.notes;

export default noteSlice.reducer;
