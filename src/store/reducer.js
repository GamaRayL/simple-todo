import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoItems: [],
  },
  reducers: {
    setTodoToArray: (state, action) => {
      state.todoItems.push(action.payload);
    },
  },
});

export const { setTodoToArray } = todoSlice.actions;
export default todoSlice.reducer;
