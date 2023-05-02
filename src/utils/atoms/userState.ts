import { atom } from "recoil";
import { userType } from "@/types/user";
import { v1 } from "uuid";

export const userState = atom<userType | null>({
  key: `userState${v1()}`,
  default: null,
});
