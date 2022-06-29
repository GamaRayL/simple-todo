import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      action.payload.text.length > 0
        ? state.todos.push({
            id: new Date().toISOString(),
            text: action.payload.text,
            completed: false,
          })
        : alert("Please enter something");
    },

    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },

    removeCompletedTodos(state) {
      state.todos = state.todos.filter((todo) => todo.completed !== true);
    },

    saveEditTodo(state, action) {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.todoValue }
          : todo
      );
    },

    toggleTodoComplete(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
    },

    toggleAllTodoComplete(state) {
      state.todos = state.todos.every((todo) => todo.completed)
        ? state.todos.map((todo) => ({ ...todo, completed: false }))
        : state.todos.map((todo) => ({ ...todo, completed: true }));
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
