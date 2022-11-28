import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "store/filterSlice";
import { selectAllTodos } from "store/selectors";
import { removeCompletedTodos } from "store/todoSlice";
import css from "./styles.module.css";

export const StatusPanel = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectAllTodos);
  const itemsLeft = todos.filter((todo) => todo.isCompleted !== true).length;

  return (
    <div className={css.panel}>
      <div className={css.todoLeft}>{`${itemsLeft} ${"items left"}`}</div>
      <div className={css.filters}>
        <input
          className={css.radio}
          onChange={() => dispatch(changeFilter("all"))}
          type="radio"
          defaultChecked
          name="filter"
          id="all"
        />
        <label htmlFor="all" className={css.filterItem}>
          All
        </label>
        <input
          className={css.radio}
          onChange={() => dispatch(changeFilter("active"))}
          type="radio"
          name="filter"
          id="active"
        />
        <label htmlFor="active" className={css.filterItem}>
          Active
        </label>
        <input
          className={css.radio}
          onChange={() => dispatch(changeFilter("completed"))}
          type="radio"
          name="filter"
          id="completed"
        />
        <label htmlFor="completed" className={css.filterItem}>
          Completed
        </label>
      </div>
      <div
        className={css.clearCompletedTodo}
        onClick={() => dispatch(removeCompletedTodos())}
      >
        Clear completed
      </div>
    </div>
  );
};
