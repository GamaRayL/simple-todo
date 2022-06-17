import { Provider } from "react-redux/es/exports";
import { store } from "store";
import css from "./styles.module.css";
import { ToDoList } from "components/ToDoList";

function App() {
  return (
    <Provider store={store}>
      <div className={css.container}>
        <ToDoList />
      </div>
    </Provider>
  );
}

export default App;
