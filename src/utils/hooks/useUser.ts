import { useState, useEffect } from "react";
import { userState } from "../atoms/userState";
import axios, { AxiosError } from "axios";
import { useRecoilState } from "recoil";

export const useUser = () => {
  const [user, setUser] = useRecoilState(userState);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | unknown | null>(null);
  useEffect(() => {
    if (user) {
      setLoading(false);
      return;
    }
    const getUser = async () => {
      try {
        const res = await axios.get("/user");
        setUser(res.data);
      } catch (error: AxiosError | unknown) {
        if (!axios.isAxiosError(error)) {
          console.log(error);
        }
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [user, setUser]);
  return { user, loading, error };
};
