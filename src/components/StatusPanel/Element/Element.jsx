import css from "./styles.module.css";

export const Element = (props) => {
  const { onChange, id, checked, type, children, onClick } = props;
  return (
    <>
      <input
        className={css.element}
        onChange={onChange}
        onClick={onClick}
        type={type ? type : "radio"}
        defaultChecked={checked ? true : false}
        name="filter"
        id={id}
      />
      <label htmlFor={id} className={css.label}>
        {children}
      </label>
    </>
  );
};
