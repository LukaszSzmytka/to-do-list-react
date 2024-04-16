const localStorageKey = "tasks";

export const saveTasksINLocalStorage = (tasks) =>
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || [];
