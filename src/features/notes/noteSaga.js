import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  addNote,
  deleteNote,
  fetchNotesError,
  fetchNotesStart,
  fetchNotesSuccess,
  selectNotes,
} from "./noteSlice";
import {
  getNotesFromLocalStorage,
  saveNotesInLocalStorage,
} from "./notesLocalStorage";

function* fetchNotesHandler() {
  try {
    const notes = yield call(getNotesFromLocalStorage);
    yield put(fetchNotesSuccess(notes));
  } catch (error) {
    yield put(fetchNotesError());
  }
}

function* saveNotesInLocalStorageHandler() {
  const notes = yield select(selectNotes);
  yield call(saveNotesInLocalStorage, notes);
}

export function* watchFetchNotes() {
  yield takeLatest(fetchNotesStart.type, fetchNotesHandler);
  yield takeLatest([addNote.type, deleteNote.type], saveNotesInLocalStorageHandler)}
