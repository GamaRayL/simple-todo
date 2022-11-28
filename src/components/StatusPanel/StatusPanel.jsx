import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "store/filterSlice";
import { selectAllTodos } from "store/selectors";
import { removeCompletedTodos } from "store/todoSlice";
import { FilterElement } from "./FilterElement";
import css from "./styles.module.css";

export const StatusPanel = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectAllTodos);
  const itemsLeft = todos.filter((todo) => todo.isCompleted !== true).length;

  const onChangeHandler = (e) => {
    dispatch(changeFilter(e.target.id));
  };

  return (
    <div className={css.panel}>
      <div className={css.todoLeft}>{`${itemsLeft} ${"items left"}`}</div>
      <div className={css.filters}>
        <FilterElement onChange={onChangeHandler} checked id="all" />
        <FilterElement onChange={onChangeHandler} id="active" />
        <FilterElement onChange={onChangeHandler} id="completed" />
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
