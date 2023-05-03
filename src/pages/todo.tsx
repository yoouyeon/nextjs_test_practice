import { useState } from "react";
import ButtonBase from "@mui/material/ButtonBase";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import { getTodos } from "../utils/api/todo";
import TodoContainer from "../components/todo/TodoContainer";
import NewTodoModal from "../components/todo/NewTodoModal";

const CircleButton = styled(ButtonBase)(({ theme }) => ({
  width: 100,
  height: 100,
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

// function TodoPage(props: { todos: todoType[] | null }) {
function TodoPage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // if (!props.todos) return <div>error</div>;

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <NewTodoModal />
      </Modal>
      <h1>TODO</h1>
      {/* <TodoContainer todos={props.todos} /> */}
      <TodoContainer />
      <CircleButton onClick={handleOpen}>✏️</CircleButton>
    </div>
  );
}

export async function getServerSideProps() {
  const todos = await getTodos();

  return {
    props: {
      todos,
    },
  };
}

export default TodoPage;
