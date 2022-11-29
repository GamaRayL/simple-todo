import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "store/filterSlice";
import { selectAllTodos } from "store/selectors";
import { removeCompletedTodos } from "store/todoSlice";
import { Element } from "./Element";
import css from "./styles.module.css";

export const StatusPanel = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectAllTodos);
  const itemsLeft = todos.filter((todo) => todo.isCompleted !== true).length;

  const onChangeHandler = (e) => {
    dispatch(changeFilter(e.target.id));
  };

  const onSubmitHandler = () => {
    dispatch(removeCompletedTodos());
  };

  return (
    <div className={css.panel}>
      <div className={css.todoLeft}>{`${itemsLeft} ${"items left"}`}</div>
      <div>
        <Element onChange={onChangeHandler} checked id="all">
          All
        </Element>
        <Element onChange={onChangeHandler} id="active">
          Active
        </Element>
        <Element onChange={onChangeHandler} id="completed">
          Completed
        </Element>
      </div>
      <Element onClick={onSubmitHandler} id="clear" type="button">
        Clear completed
      </Element>
    </div>
  );
};
