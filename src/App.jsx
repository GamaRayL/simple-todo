import { ToDoList, InputField, StatusPanel } from "components";
import css from "./styles.module.css";

function App() {
  return (
    <div className={css.container}>
      <div className={css.box}>
        <h1 className={css.title}>todos</h1>
        <div className={css.content}>
          <InputField />
          <ToDoList />
          <StatusPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
