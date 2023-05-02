import { rest } from "msw";
import { store as cookieStore } from "@mswjs/cookies";
import userData from "../data/userData.json";
import { LoginBodyType, userDataType } from "@/types/user";

type userData = userDataType[];

const AUTHTOKENKEY = "auth-token";

export const userHandlers = [
  // 로그인
  rest.post<LoginBodyType>("/login", async (req, res, ctx) => {
    const { username, password } = await req.json();
    const user = userData.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      return res(ctx.status(200), ctx.cookie(AUTHTOKENKEY, user.token));
    }
    return res(ctx.status(400));
  }),
  // 로그아웃
  rest.post("/logout", (req, res, ctx) => {
    const token = req.cookies[AUTHTOKENKEY];
    const user = userData.find((user) => user.token === token);
    clearCookie();
    if (!user) {
      return res(ctx.status(400));
    }
    return res(ctx.status(200));
  }),
  // 유저정보
  rest.get("/user", (req, res, ctx) => {
    const token = req.cookies[AUTHTOKENKEY];
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
