import { Remove } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "store/todoSlice";
import css from "./styles.module.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { green } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import { saveEditTodo } from "store/todoSlice";

export const TodoItem = ({ id, text, completed }) => {
  const [isShowDeleteIcon, setIsShowDeleteIcon] = useState(false);
  const [isEditTodo, setIsEditTodo] = useState(false);
  const [todoValue, setTodoValue] = useState(text);
  const dispatch = useDispatch();

  const checkedTheme = createTheme({
    palette: { primary: { main: green[500] } },
  });

  return (
    <li
      key={id}
      className={css.item}
      onMouseEnter={() => setIsShowDeleteIcon(true)}
      onMouseLeave={() => setIsShowDeleteIcon(false)}
    >
      <div className={css.boxTextIcon}>
        <label className={css.boxIcon}>
          <ThemeProvider theme={checkedTheme}>
            <Checkbox
              disabled={isEditTodo}
              sx={{ color: "#00000042" }}
              checked={completed}
              onChange={() => dispatch(toggleTodoComplete({ id }))}
            />
          </ThemeProvider>
        </label>
        {isEditTodo ? (
          <input
            type="text"
            className={css.textField}
            onSubmit={(e) => {
              setTodoValue(e.target.value);
            }}
            value={todoValue}
            onChange={(e) => {
              setTodoValue(e.target.value);
            }}
          ></input>
        ) : (
          <span
            className={`${css.todoText} ${
              completed ? css.linethroughTodoText : null
            }`}
          >
            {text}
          </span>
        )}
      </div>
      {isShowDeleteIcon ? (
        <div className={css.boxIcon}>
          {isEditTodo ? (
            <SaveAsOutlinedIcon
              className={css.saveIcon}
              color="disabled"
              onClick={() => {
                setIsEditTodo(false);
                dispatch(saveEditTodo({ todoValue, id }));
              }}
            />
          ) : (
            <EditOutlinedIcon
              className={css.editIcon}
              onClick={() => setIsEditTodo(true)}
              color="disabled"
              titleAccess="Edit"
            />
          )}
          <Remove
            className={css.deleteTodo}
            color="disabled"
            onClick={() => dispatch(removeTodo({ id }))}
          />
        </div>
      ) : null}
    </li>
  );
};
