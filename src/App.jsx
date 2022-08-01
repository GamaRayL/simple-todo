import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo, toggleAllTodoComplete } from "store/todoSlice";
import { LibraryAddCheckOutlined } from "@mui/icons-material";
import { ToDoList } from "components/TodoList";
import { InputField } from "components/InputField";
import { StatusPanel } from "components/StatusPanel";
import css from "./styles.module.css";

function App() {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [text, setText] = useState("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
              <LibraryAddCheckOutlined
                onClick={() => dispatch(toggleAllTodoComplete())}
              />
            </div>
            <InputField
              addTask={addTask}
              text={text}
              setText={setText}
              inputRef={inputRef}
            />
          </div>
          <ToDoList />
          <StatusPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
