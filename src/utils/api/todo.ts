import axios, { AxiosError } from "axios";
import { todoType } from "@/types/todo";

export const getTodos = async (): Promise<todoType[] | null> => {
  try {
    const response = await axios.get<todoType[]>("/todos", {
      withCredentials: true,
    });
    return response.data;
  } catch (error: AxiosError | unknown) {
    if (axios.isAxiosError(error)) {
      return null;
    }
    console.log(error);
    return null;
  }
};

export const addTodo = async (todo: string): Promise<todoType[]> => {
  try {
    const res = await axios.post(
      "/todos",
      {
        todo,
        completed: false,
      },
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error: AxiosError | unknown) {
    if (axios.isAxiosError(error)) {
      return [];
    }
    console.log(error);
    return [];
  }
};

export const toggleTodo = async (id: string): Promise<boolean> => {
  try {
    await axios.put(`/todos/${id}`, {
      withCredentials: true,
    });
    return true;
  } catch (error: AxiosError | unknown) {
    if (axios.isAxiosError(error)) {
      return false;
    }
    console.log(error);
    return false;
  }
};
