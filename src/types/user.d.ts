export type userDataType = {
  id: number;
  name: string;
  username: string;
  token: string;
  password: string;
  idAdmin: boolean;
};

export type userType = {
  id: number;
  name: string;
  username: string;
  isAdmin: boolean;
};

export type LoginBodyType = {
  username: string;
  password: string;
};

export type LoginResponseType = "success" | "fail";
