import TodoPage from "../pages/todo";
import { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";
import { todoType } from "../types/todo";

let todoList: todoType[] = [
  {
    id: "1",
    todo: "todo1",
    completed: false,
  },
];

const meta: Meta<typeof TodoPage> = {
  title: "TodoPage",
  component: TodoPage,
  parameters: {
    msw: [
      rest.get("/todos", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(todoList));
      }),
    ],
  },
};

export default meta;

type Story = StoryObj<typeof TodoPage>;

export const Default: Story = {
  render: () => <TodoPage />,
  parameters: {
    msw: [
      rest.get("/todos", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(todoList));
      }),
      rest.post("/todos", async (req, res, ctx) => {
        const todo: todoType = await req.json();
        todoList.push(todo);
        return res(ctx.status(200), ctx.json(todoList));
      }),
      rest.put("/todos/:id", async (req, res, ctx) => {
        const id = req.params.id;
        const index = todoList.findIndex((todo) => todo.id === id);
        todoList[index].completed = !todoList[index].completed;
        return res(ctx.status(200), ctx.json(todoList));
      }),
      rest.delete("/todos/:id", async (req, res, ctx) => {
        const id = req.params.id;
        todoList = todoList.filter((todo) => todo.id !== id);
        return res(ctx.status(200), ctx.json(todoList));
      }),
    ],
  },
};
