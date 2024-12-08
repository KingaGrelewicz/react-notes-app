const themeLocalStorageKey = "theme";

export const saveThemeInLocalStorage = (theme) => {
  localStorage.setItem(themeLocalStorageKey, JSON.stringify(theme));
};

export const getThemeFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(themeLocalStorageKey));
