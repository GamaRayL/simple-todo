import { createSelector } from "@reduxjs/toolkit";

export const selectAllTodos = (state) => state.todos.todos;
export const selectActiveFilter = (state) => state.filter;

export const selectTodosByFilter = createSelector(
  [selectAllTodos, selectActiveFilter],
  (allTodos, activeFilter) => {
    switch (activeFilter) {
      case "all":
        return allTodos;
      case "completed":
        return allTodos.filter((todo) => todo.isCompleted);
      default:
        return allTodos.filter((todo) => !todo.isCompleted);
    }
  }
);
