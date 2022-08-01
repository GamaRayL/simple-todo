import { AddBoxOutlined } from "@mui/icons-material";
import css from "./styles.module.css";

export const InputField = ({ addTask, setText, text, inputRef }) => {
  return (
    <form className={css.form} onSubmit={(e) => addTask(e)}>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="What need to be done?"
        className={css.textField}
      />
      <AddBoxOutlined onClick={(e) => addTask(e)} className={css.addIcon} />
    </form>
  );
};
