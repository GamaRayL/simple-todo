import { useSelector } from "react-redux";
import { TodoItem } from "components/TodoItem";

export const ToDoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
