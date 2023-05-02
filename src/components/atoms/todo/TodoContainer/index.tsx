import TodoItem from "../TodoItem";
import styles from "./TodoContainer.module.scss";
import { todoType } from "@/types/todo";

export default function TodoContainer(todos: todoType[]) {
  return (
    <div className={styles.container}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
