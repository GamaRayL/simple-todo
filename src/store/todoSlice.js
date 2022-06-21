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
        : alert("Укажите название");
    },

    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },

    removeAllTodos(state) {
      state.todos = [];
    },

    toggleTodoComplete(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
    },

    toggleAllTodoComplete(state, action) {
      state.todos = state.todos.filter((todo) =>
        todo.completed === action.payload
          ? { ...todo, completed: (todo.completed = true) }
          : { ...todo, completed: (todo.completed = false) }
      );
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleTodoComplete,
  toggleAllTodoComplete,
  removeAllTodos,
} = todoSlice.actions;
export default todoSlice.reducer;
