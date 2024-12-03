import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  fetchNotesError,
  fetchNotesStart,
  fetchNotesSuccess,
} from "./noteSlice";
import { getNotesFromLocalStorage } from "./notesLocalStorage";

function* fetchNotesHandler() {
  try {
    yield delay(1000);
    const notes = yield call(getNotesFromLocalStorage);
    yield put(fetchNotesSuccess(notes));
  } catch (error) {
    yield put(fetchNotesError());
  }
}

export function* watchFetchNotes() {
  yield takeLatest(fetchNotesStart.type, fetchNotesHandler);
}
