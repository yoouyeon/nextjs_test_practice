import { useRouter } from "next/router";
import { Button } from "@/components/atoms/Button";
import { logout } from "@/utils/logout";

export default function Home() {
  const router = useRouter();
  // 로그인 여부에 따라 다른 버튼 노출
  const id: number = 1;
  const logoutHandler = async () => {
    await logout();
    router.push("/login");
  };
  return (
    <div>
      This is Test Sample Todo Home Page
      <Button
        variant="contained"
        onClick={() => {
          router.push("/login");
        }}
      >
        Login
      </Button>
      <Button variant="contained" onClick={logoutHandler}>
        Logout
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          router.push(`/todo/${id}`);
        }}
      >
        Go To My Todo
      </Button>
    </div>
  );
}
