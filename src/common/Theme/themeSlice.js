import { createSlice } from "@reduxjs/toolkit";
import { darkTheme, lightTheme } from "../../theme";

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  return storedTheme === "dark" ? darkTheme : lightTheme;
};

const initialState = {
  theme: getInitialTheme(),
  isDarkTheme: localStorage.getItem("theme") === "dark" ? true : false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { switchTheme } = themeSlice.actions;

const selectTheme = (state) => state.theme;

export const selectIsDarkTheme = (state) => selectTheme(state).isDarkTheme;

export default themeSlice.reducer;
