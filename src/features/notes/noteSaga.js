import { call, select, takeEvery } from "redux-saga/effects";
import { addNote, deleteNote, selectNotes } from "./noteSlice";
import { saveNotesInLocalStorage } from "./notesLocalStorage";

function* saveNotesInLocalStorageHandler() {
  const notes = yield select(selectNotes);
  yield call(saveNotesInLocalStorage, notes);
}

export function* watchFetchNotes() {
  yield takeEvery(
    [addNote.type, deleteNote.type],
    saveNotesInLocalStorageHandler
  );
}
