import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveEditTodo } from "store/todoSlice";
import { removeTodo, toggleTodoComplete } from "store/todoSlice";
import { createTheme, ThemeProvider, Checkbox } from "@mui/material";
import { EditOutlined, Remove, SaveAsOutlined } from "@mui/icons-material";
import { green } from "@mui/material/colors";
import css from "./styles.module.css";

export const TodoItem = ({ id, value, isCompleted }) => {
  const [isShowEditIcons, setIsShowEditIcons] = useState(false);
  const [isEditTodo, setIsEditTodo] = useState(false);
  const [todoValue, setTodoValue] = useState(value);
  const dispatch = useDispatch();

  const checkedTheme = createTheme({
    palette: { primary: { main: green[500] } },
  });

  return (
    <li
      key={id}
      className={css.item}
      onMouseEnter={() => setIsShowEditIcons(true)}
      onMouseLeave={() => setIsShowEditIcons(false)}
    >
      <div className={css.boxTextIcon}>
        <label className={css.boxIcon}>
          <ThemeProvider theme={checkedTheme}>
            <Checkbox
              className={css.checkbox}
              disabled={isEditTodo}
              sx={{ color: "#00000042" }}
              checked={isCompleted}
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
              isCompleted ? css.linethroughTodoText : null
            }`}
          >
            {value}
          </span>
        )}
      </div>
      {isShowEditIcons ? (
        <div className={css.boxIcon}>
          {isEditTodo ? (
            <SaveAsOutlined
              className={css.saveIcon}
              color="disabled"
              onClick={() => {
                setIsEditTodo(false);
                dispatch(saveEditTodo({ todoValue, id }));
              }}
            />
          ) : (
            <EditOutlined
              className={css.editIcon}
              onClick={() => setIsEditTodo(true)}
              color="disabled"
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
