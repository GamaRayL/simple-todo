import { useSelector } from "react-redux";
import { selectTodosByFilter } from "store/selectors";
import { TodoItem } from "components/TodoItem";

export const ToDoList = () => {
  const todos = useSelector(selectTodosByFilter);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
