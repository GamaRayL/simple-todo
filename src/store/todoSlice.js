import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      action.payload.value.length > 0
        ? state.todos.push({
            id: new Date().toISOString(),
            value: action.payload.value,
            isCompleted: false,
          })
        : alert("Please enter something");
    },

    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },

    removeCompletedTodos(state) {
      state.todos = state.todos.filter((todo) => todo.isCompleted !== true);
    },

    saveEditTodo(state, action) {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, value: action.payload.todoValue }
          : todo
      );
    },

    toggleTodoComplete(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.isCompleted = !toggledTodo.isCompleted;
    },

    toggleAllTodoComplete(state) {
      state.todos = state.todos.every((todo) => todo.isCompleted)
        ? state.todos.map((todo) => ({ ...todo, isCompleted: false }))
        : state.todos.map((todo) => ({ ...todo, isCompleted: true }));
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleTodoComplete,
  toggleAllTodoComplete,
  removeCompletedTodos,
  saveEditTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
