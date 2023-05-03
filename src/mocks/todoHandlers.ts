import { rest } from "msw";
import { todoType } from "@/types/todo";
import userData from "../data/userData.json";
import { userDataType } from "@/types/user";

type userData = userDataType[];
const AUTHTOKENKEY = "auth-token";

let todos: todoType[] = [
  {
    id: "1",
    todo: "할일1",
    completed: false,
  },
  {
    id: "2",
    todo: "할일2",
    completed: false,
  },
  {
    id: "3",
    todo: "할일3",
    completed: false,
  },
]; // 데이터베이스 대용

export const todoHandlers = [
  // 할일 목록 조회
  rest.get(`*/todos`, (req, res, ctx) => {
    const token = req.cookies[AUTHTOKENKEY];
    const user = userData.find((user) => user.token === token);
    if (!user) {
      return res(ctx.status(400));
    }
    return res(ctx.status(200), ctx.json(todos));
  }),
  // 할일 추가
  rest.post(`/todos`, async (req, res, ctx) => {
    const token = req.cookies[AUTHTOKENKEY];
    const user = userData.find((user) => user.token === token);
    if (!user) {
      return res(ctx.status(400));
    }
    const todo: todoType = await req.json();
    todos.push(todo);
    return res(ctx.status(200), ctx.json(todos));
  }),
  // 할일 수정
  rest.put(`/todos/:id`, async (req, res, ctx) => {
    const token = req.cookies[AUTHTOKENKEY];
    const user = userData.find((user) => user.token === token);
    if (!user) {
      return res(ctx.status(400));
    }
    const id = req.params.id;
    const index = todos.findIndex((todo) => todo.id === id);
    todos[index].completed = !todos[index].completed;
    return res(ctx.status(200), ctx.json(todos));
  }),
  // 할일 삭제
  rest.delete(`/todos/:id`, async (req, res, ctx) => {
    const token = req.cookies[AUTHTOKENKEY];
    const user = userData.find((user) => user.token === token);
    if (!user) {
      return res(ctx.status(400));
    }
    const id = req.params.id;
    todos = todos.filter((todo) => todo.id !== id);
    return res(ctx.status(200), ctx.json(todos));
  }),
];
