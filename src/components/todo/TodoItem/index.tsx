import { Checkbox, IconButton } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import DeleteIcon from "@mui/icons-material/Delete";
import classNames from "classnames";
import { todoType } from "@/types/todo";
import styles from "./TodoItem.module.scss";

export default function TodoItem(props: todoType) {
  const { id, todo, completed } = props;
  function checkHandler() {
    console.log("체크");
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
      <IconButton aria-label="delete" className={styles.delete}>
        <DeleteIcon />
      </IconButton>
    </li>
  );
}
