import { AddBoxOutlined } from "@mui/icons-material";
import css from "./styles.module.css";

export const InputField = ({ addTask, setText, text }) => {
  return (
    <form className={css.form} onSubmit={(e) => addTask(e)}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="What need to be done?"
        className={css.textField}
      />
      <AddBoxOutlined
        titleAccess="Add the task"
        onClick={(e) => addTask(e)}
        className={css.addIcon}
      />
    </form>
  );
};
