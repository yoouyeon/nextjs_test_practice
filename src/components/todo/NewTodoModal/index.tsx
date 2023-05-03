import { useSetRecoilState } from "recoil";
import styles from "./NewTodoModal.module.scss";
import { TextField, Button } from "../../atoms";
import { addTodo } from "../../../utils/api/todo";
import { todoListState } from "@/utils/atoms/todoAtom";

export default function NewTodoModal() {
  const setTodos = useSetRecoilState(todoListState);
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const todo = formData.get("todo") as string;
    const res = await addTodo(todo);
    setTodos(res);
  };

  return (
    <div className={styles.container}>
      <h1>new todo</h1>
      <form onSubmit={submitHandler}>
        <TextField label="todo" />
        <Button type="submit">submit</Button>
      </form>
    </div>
  );
}
