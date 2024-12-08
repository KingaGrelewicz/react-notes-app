import { select, takeEvery } from "redux-saga/effects";
import { selectIsDarkTheme, switchTheme } from "./themeSlice";

function* saveThemeInLocalStorageHandler() {
  const isDarkTheme = yield select(selectIsDarkTheme);
  localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
}

export function* watchSaveInLocalStorage() {
  yield takeEvery(switchTheme.type, saveThemeInLocalStorageHandler);
}
