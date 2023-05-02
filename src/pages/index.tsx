import { useRouter } from "next/router";
import { Button } from "@/components/atoms/Button";
import { logout } from "@/utils/logout";
import { useUser } from "@/utils/hooks/useUser";

export default function Home() {
  const router = useRouter();
  const { user, error, loading } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }
  const logoutHandler = async () => {
    await logout();
    router.push("/login");
  };
  return (
    <div>
      This is Test Sample Todo Home Page
      {user && !error ? (
        <>
          <Button variant="contained" onClick={logoutHandler}>
            Logout
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              router.push(`/todo/${user.id}`);
            }}
          >
            Go To My Todo
          </Button>
        </>
      ) : (
        <Button
          variant="contained"
          onClick={() => {
            router.push("/login");
          }}
        >
          Login
        </Button>
      )}
    </div>
  );
}
