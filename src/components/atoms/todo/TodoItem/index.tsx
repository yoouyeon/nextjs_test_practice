import { todoType } from "@/types/todo";
import styles from "./TodoItem.module.scss";

export default function TodoItem(props: todoType) {
  const { id, todo, completed } = props;
  return (
    <li id={id} className={styles.wrapper}>
      <input type="checkbox" checked={completed} className={styles.checkbox} />
      <div className={styles.text}>{todo}</div>
      <button>삭제</button>
    </li>
  );
}
