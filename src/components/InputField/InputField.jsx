import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AddBoxOutlined, LibraryAddCheckOutlined } from "@mui/icons-material";
import { addTodo, toggleAllTodoComplete } from "store/todoSlice";
import css from "./styles.module.css";

export const InputField = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo({ value }));
    setValue("");
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={css.contentTopItem}>
      <div className={css.iconArrowDown}>
        <LibraryAddCheckOutlined
          onClick={() => dispatch(toggleAllTodoComplete())}
        />
      </div>
      <form className={css.form} onSubmit={onSubmitHandler}>
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeHandler}
          type="text"
          placeholder="What need to be done?"
          className={css.textField}
        />
        <AddBoxOutlined onClick={onSubmitHandler} className={css.addIcon} />
      </form>
    </div>
  );
};
