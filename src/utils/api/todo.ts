import axios, { AxiosError } from "axios";
import { todoType } from "@/types/todo";
import { v1 } from "uuid";

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

export const addTodo = async (todo: string): Promise<todoType[] | null> => {
  try {
    const res = await axios.post(
      "/todos",
      {
        todo,
        id: v1(),
        completed: false,
      },
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error: AxiosError | unknown) {
    if (axios.isAxiosError(error)) {
      return null;
    }
    console.log(error);
    return null;
  }
};

export const toggleTodo = async (id: string): Promise<todoType[] | null> => {
  try {
    const res = await axios.put(`/todos/${id}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error: AxiosError | unknown) {
    if (axios.isAxiosError(error)) {
      return null;
    }
    console.log(error);
    return null;
  }
};

export const deleteTodo = async (id: string): Promise<todoType[] | null> => {
  try {
    const res = await axios.delete(`/todos/${id}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error: AxiosError | unknown) {
    if (axios.isAxiosError(error)) {
      return null;
    }
    console.log(error);
    return null;
  }
};
