import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "store/todoSlice";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import css from "./styles.module.css";
import { ToDoList } from "components/TodoList";
import { InputField } from "components/InputField";
import { StatusPanel } from "components/StatusPanel";
import { toggleAllTodoComplete } from "store/todoSlice";

function App() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

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
              <LibraryAddCheckOutlinedIcon
                onClick={() => dispatch(toggleAllTodoComplete())}
              />
            </div>
            <InputField addTask={addTask} text={text} setText={setText} />
          </div>
          <ToDoList />
          <StatusPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
