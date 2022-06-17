import {
  CheckCircleOutline,
  RadioButtonUnchecked,
  Remove,
} from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "store/todoSlice";
import css from "./styles.module.css";

const useStyles = makeStyles({
  checkbox: {
    "&.Mui-checked + $todoText": {
      textDecoration: "line-through",
      color: "#d1d1d1",
    },
  },
  todoText: {},
});

export const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <li key={id} className={css.item}>
      <label style={{ display: "flex" }}>
        <Checkbox
          className={classes.checkbox}
          checked={completed}
          onChange={() => dispatch(toggleTodoComplete({ id }))}
          icon={<RadioButtonUnchecked />}
          checkedIcon={<CheckCircleOutline color="success" />}
        />
        <span className={classes.todoText}>{text}</span>
      </label>
      <Remove
        className={css.deleteTodo}
        color="disabled"
        onClick={() => dispatch(removeTodo({ id }))}
      />
    </li>
  );
};
