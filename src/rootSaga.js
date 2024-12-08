import { all } from "redux-saga/effects";
import { watchFetchNotes } from "./features/notes/noteSaga";
import { watchSaveInLocalStorage } from "./common/Theme/themeSaga";

export default function* rootSaga() {
  yield all([watchFetchNotes(), watchSaveInLocalStorage()]);
}
