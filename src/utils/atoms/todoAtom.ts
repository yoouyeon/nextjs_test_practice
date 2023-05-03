import { atom } from "recoil";
import { todoType } from "@/types/todo";
import { v1 } from "uuid";

export const todoListState = atom<todoType[] | null>({
  key: `todoListState${v1()}`,
  default: [],
});
