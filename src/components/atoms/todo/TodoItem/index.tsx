import { todoType } from "@/types/todo";

export default function TodoItem(props: todoType) {
  const { id, todo, completed } = props;
  return (
    <li id={id}>
      <input type="checkbox" checked={completed} />
      <span>{todo}</span>
      <button>삭제</button>
    </li>
  );
}
