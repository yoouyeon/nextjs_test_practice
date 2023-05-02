import axios, { AxiosError } from "axios";
import { LoginBodyType, LoginResponseType } from "@/types/user";

export const login = async (
  username: string,
  password: string
): Promise<LoginResponseType> => {
  try {
    await axios.post<LoginBodyType>("/login", {
      username,
      password,
    });
    return "success";
  } catch (error: AxiosError | unknown) {
    if (axios.isAxiosError(error)) {
      return "fail";
    }
    console.log(error);
    return "fail";
  }
};
