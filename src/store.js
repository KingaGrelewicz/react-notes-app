import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./features/notes/noteSlice";
import createSagaMiddleware from "redux-saga";
import { watchFetchNotes } from "./features/notes/noteSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchNotes);

export default store;
