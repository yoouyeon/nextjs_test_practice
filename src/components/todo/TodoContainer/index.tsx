import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import classNames from "classnames";
import TodoItem from "../TodoItem";
import styles from "./TodoContainer.module.scss";
import { todoType } from "@/types/todo";
import { getTodos } from "../../../utils/api/todo";
import { todoListState } from "../../../utils/atoms/todoAtom";

// export default function TodoContainer(props: { todos: todoType[] }) {
export default function TodoContainer() {
  const [todos, setTodos] = useRecoilState<todoType[] | null>(todoListState);
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

  if (loading)
    return (
      <div className={classNames(styles.container, styles.center)}>
        loading...
      </div>
    );

  // FIXME: 에러 문구가 출력되어야 하는데 할 일이 없어요 문구가 출력됨
  if (todos === null)
    return (
      <div className={classNames(styles.container, styles.center)}>error</div>
    );

  if (todos.length === 0) {
    return (
      <div className={classNames(styles.container, styles.center)}>
        할 일이 없어요!
      </div>
    );
  }

  return (
    <ul className={styles.container}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
}
