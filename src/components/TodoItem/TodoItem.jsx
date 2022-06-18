import { Remove } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "store/todoSlice";
import css from "./styles.module.css";

export const TodoItem = ({ id, text, completed }) => {
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();

  return (
    <li
      key={id}
      className={css.item}
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <label className={css.boxTextIcon}>
        <input
          className={css.checkbox}
          checked={completed}
          type="checkbox"
          onChange={() => dispatch(toggleTodoComplete({ id }))}
        />
        {completed ? (
          <img
            className={css.checkedIcon}
            src="images/checked.svg"
            alt="checked"
          />
        ) : (
          <img
            className={css.uncheckedIcon}
            src="images/unchecked.svg"
            alt="unchecked"
          />
        )}
        <span className={css.todoText}>{text}</span>
      </label>
      {isShow ? (
        <Remove
          className={css.deleteTodo}
          color="disabled"
          onClick={() => dispatch(removeTodo({ id }))}
        />
      ) : null}
    </li>
  );
};
