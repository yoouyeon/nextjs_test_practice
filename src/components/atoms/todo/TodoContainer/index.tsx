import { useState, useEffect } from "react";
import TodoItem from "../TodoItem";
import styles from "./TodoContainer.module.scss";
import { todoType } from "@/types/todo";
import { getTodos } from "../../../../utils/api/todo";

// export default function TodoContainer(props: { todos: todoType[] }) {
export default function TodoContainer() {
  const [todos, setTodos] = useState<todoType[] | null>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getTodos()
      .then((res) => res && setTodos(res))
      .catch((error: unknown) => {
        console.log(error);
        setTodos(null);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>loading...</div>;

  if (!todos) return <div>error</div>;

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
