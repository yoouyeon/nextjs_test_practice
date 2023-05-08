import { Checkbox, IconButton } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSetRecoilState } from "recoil";
import classNames from "classnames";
import { todoType } from "@/types/todo";
import styles from "./TodoItem.module.scss";
import { todoListState } from "@/utils/atoms/todoAtom";
import { toggleTodo, deleteTodo } from "@/utils/api/todo";

export default function TodoItem(props: todoType) {
  const { id, todo, completed } = props;
  const setTodos = useSetRecoilState(todoListState);

  async function checkHandler() {
    const res = await toggleTodo(id);
    if (res) {
      setTodos(res);
    }
  }

  async function deleteHandler() {
    const res = await deleteTodo(id);
    if (res) {
      setTodos(res);
    }
  }

  return (
    <li
      id={id}
      className={classNames(completed ? styles.checked : styles.wrapper)}
    >
      <Checkbox
        className={styles.checkbox}
        icon={<CircleOutlinedIcon />}
        checkedIcon={<CircleIcon />}
        checked={completed}
        onChange={checkHandler}
      />
      <div className={styles.text}>{todo}</div>
      <IconButton className={styles.delete} onClick={deleteHandler}>
        <DeleteIcon />
      </IconButton>
    </li>
  );
}
