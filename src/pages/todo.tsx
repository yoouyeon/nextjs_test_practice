import { getTodos } from "@/utils/api/todo";
import { todoType } from "@/types/todo";
import TodoContainer from "@/components/atoms/todo/TodoContainer";

// function TodoPage(props: { todos: todoType[] | null }) {
function TodoPage() {
  // if (!props.todos) return <div>error</div>;

  return (
    <div>
      <h1>TODO</h1>
      {/* <TodoContainer todos={props.todos} /> */}
      <TodoContainer />
      <button>✏️</button>
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
