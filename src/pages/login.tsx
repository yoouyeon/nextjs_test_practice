import { useRouter } from "next/router";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { TextField } from "@/components/atoms";
import { login } from "@/utils/login";
import { LoginResponseType } from "@/types/user";

export default function Login() {
  const router = useRouter();

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const id = formData.get("ID") as string;
    const password = formData.get("Password") as string;
    if (!id || !password) return alert("ID를 입력하시오");
    const res: LoginResponseType = await login(id, password);
    if (res === "fail")
      return alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    router.push("/");
    return;
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <TextField label="ID" icon={<PersonIcon />} />
        <TextField label="Password" icon={<LockIcon />} />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
