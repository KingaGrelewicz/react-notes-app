const LocalStorageKey = "notes";

export const saveNotesInLocalStorage = (notes) =>
  localStorage.setItem(LocalStorageKey, JSON.stringify(notes));

export const getNotesFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(LocalStorageKey)) || [];
