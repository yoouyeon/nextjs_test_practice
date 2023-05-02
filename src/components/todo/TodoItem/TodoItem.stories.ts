import TodoItem from ".";
import type { Meta, StoryObj } from "@storybook/react";
// import { todoType } from "@/types/todo";

const meta: Meta<typeof TodoItem> = {
  title: "TodoItem",
  component: TodoItem,
};

export default meta;

type Story = StoryObj<typeof TodoItem>;

export const Default: Story = {
  args: {
    id: "1",
    todo: "Todo Item",
    completed: false,
  },
};

export const Completed: Story = {
  args: {
    id: "1",
    todo: "Todo Item",
    completed: true,
  },
};
