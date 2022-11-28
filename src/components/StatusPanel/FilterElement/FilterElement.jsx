import css from "./styles.module.css";

export const FilterElement = ({ onChange, id, checked }) => {
  return (
    <>
      <input
        className={css.radio}
        onChange={onChange}
        type="radio"
        defaultChecked={checked ? true : false}
        name="filter"
        id={id}
      />
      <label htmlFor={id} className={css.filterItem}>
        {id}
      </label>
    </>
  );
};
