import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./features/notes/noteSlice";
import createSagaMiddleware from "redux-saga";
import themeReducer from "./common/Theme/themeSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    notes: notesReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
