import { rest } from "msw";
import { store as cookieStore } from "@mswjs/cookies";
import userData from "@/data/userData.json";
import { LoginBodyType, userDataType } from "@/types/user";

type userData = userDataType[];

const AUTHTOKENKEY = "auth-token";

export const handlers = [
  rest.post<LoginBodyType>("/login", async (req, res, ctx) => {
    const { username, password } = await req.json();
    const user = userData.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      // 쿠키에 토큰 설정해주기
      return res(ctx.status(200));
    }
    return res(ctx.status(400));
  }),
  rest.post("/logout", (req, res, ctx) => {
    // 요청 토큰 받아오기
    const token = "";
    const user = userData.find((user) => user.token === token);
    clearCookie();
    if (!user) {
      return res(ctx.status(400));
    }
    return res(ctx.status(200));
  }),
  rest.get("/user", (req, res, ctx) => {
    // 요청 토큰 받아오기
    const token = "";
    const user = userData.find((user) => user.token === token);
    if (!user) {
      return res(ctx.status(400));
    }
    return res(
      ctx.status(200),
      ctx.json({
        id: user.id,
        name: user.name,
        username: user.username,
        isAdmin: user.isAdmin,
      })
    );
  }),
];

function clearCookie() {
  document.cookie =
    AUTHTOKENKEY + "=; path=/; expires=" + new Date().toUTCString() + ";";
  cookieStore.clear();
}
