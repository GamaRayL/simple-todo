import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToDoList } from "components/TodoList";
import { addTodo } from "store/todoSlice";
import { InputField } from "components/InputField";
import { KeyboardArrowDown } from "@mui/icons-material";

import css from "./styles.module.css";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();
    dispatch(addTodo({ text }));

    setText("");
  };

  return (
    <div className={css.container}>
      <div className={css.box}>
        <h1 className={css.title}>todos</h1>
        <div className={css.content}>
          <div className={css.contentTopItem}>
            <div className={css.iconArrowDown}>
              <KeyboardArrowDown color="disabled" />
            </div>
            <InputField handleSubmit={addTask} text={text} setText={setText} />
          </div>
          <ToDoList />
          <div className={css.panel}>
            <div className={css.todoLeft}></div>
            <div className={css.statusContainer}>
              <div className={css.allTodo}></div>
              <div className={css.activeTodo}></div>
              <div className={css.completedTodo}></div>
            </div>
            <div className={css.clearCompletedTodo}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
