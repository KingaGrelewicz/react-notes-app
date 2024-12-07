import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getNotesFromLocalStorage } from "./notesLocalStorage";

const noteStructure = {
  title: "Note title",
  text: "",
  date: new Date().toLocaleDateString(),
};

const noteSlice = createSlice({
  name: "notes",
  initialState: {
    status: "initial",
    data: getNotesFromLocalStorage().map((note) => ({
      ...noteStructure,
      ...note,
    })),
    error: null,
  },
  reducers: {
    fetchNotesStart: (state) => {
      state.status = "loading";
    },
    fetchNotesSuccess: (state, { payload }) => {
      state.status = "success";
      state.data = payload;
    },
    fetchNotesError: (state, { payload }) => {
      state.status = "error";
      state.error = payload;
    },
    addNote: (state, { payload }) => {
      state.data.push({
        id: nanoid(),
        ...noteStructure,
        ...payload,
      });
    },
    deleteNote: (state, { payload }) => {
      state.data = state.data.filter((note) => note.id !== payload);
    },
  },
});

export const {
  fetchNotesStart,
  fetchNotesSuccess,
  fetchNotesError,
  addNote,
  deleteNote,
} = noteSlice.actions;

export const selectNotes = (state) => state.notes.data;
export const selectNotesStatus = (state) => state.notes.status;

export default noteSlice.reducer;
