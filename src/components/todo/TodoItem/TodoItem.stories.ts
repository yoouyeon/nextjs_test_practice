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

export const LongTodo: Story = {
  args: {
    id: "1",
    todo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    completed: false,
  },
};

export const LongKoreanTodo: Story = {
  args: {
    id: "1",
    todo: "노새, 강아지, 소녀들의 그러나 어머님, 어머님, 토끼, 멀듯이, 까닭입니다. 풀이 말 그리워 애기 하나에 이름과, 보고, 이웃 아침이 봅니다. 하나에 언덕 가을 봅니다.",
    completed: false,
  },
};
