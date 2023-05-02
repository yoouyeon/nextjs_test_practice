import TodoContainer from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { todoType } from "@/types/todo";
import { rest } from "msw";

const meta: Meta<typeof TodoContainer> = {
  title: "TodoContainer",
  component: TodoContainer,
};

export default meta;

type Story = StoryObj<typeof TodoContainer>;

const todoList: todoType[] = [
  {
    id: "1",
    todo: "todo1",
    completed: false,
  },
  {
    id: "2",
    todo: "todo2",
    completed: false,
  },
  {
    id: "3",
    todo: "todo3",
    completed: true,
  },
];

export const Default: Story = {
  render: () => <TodoContainer />,
  parameters: {
    msw: [
      rest.get("/todos", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(todoList));
      }),
    ],
  },
};

export const Loading: Story = {
  render: () => <TodoContainer />,
  parameters: {
    msw: [
      rest.get("/todos", (req, res, ctx) => {
        return res(ctx.status(200), ctx.delay(2000), ctx.json(todoList));
      }),
    ],
  },
};

export const Error: Story = {
  render: () => <TodoContainer />,
  parameters: {
    msw: [
      rest.get("/todos", (req, res, ctx) => {
        return res(ctx.status(400));
      }),
    ],
  },
};

export const Empty: Story = {
  render: () => <TodoContainer />,
  parameters: {
    msw: [
      rest.get("/todos", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([]));
      }),
    ],
  },
};

export const Overflowed: Story = {
  render: () => <TodoContainer />,
  parameters: {
    msw: [
      rest.get("/todos", (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json([...todoList, ...todoList, ...todoList])
        );
      }),
    ],
  },
};
