import axios, { AxiosError } from "axios";

export const logout = async () => {
  try {
    await axios.post("/logout", { withCredentials: true });
  } catch (error: AxiosError | unknown) {
    if (!axios.isAxiosError(error)) {
      console.log(error);
    }
  }
};
