import css from "./styles.module.css";

export const InputField = ({ addTask, setText, text }) => {
  return (
    <form onSubmit={(e) => addTask(e)}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="What need to be done?"
        className={css.textField}
      />
    </form>
  );
};
