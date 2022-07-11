import { rest } from "msw";

const userListDummys = [
  { name: "seyoung", age: 25 },
  { name: "suhwan", age: 23 },
];

const myUserInfoDummys = {
  name: "seyoung",
  age: 25,
  job: "Frontend Engineer"
};

const delay = 2000;

export const handlers = [
  rest.get("/userlist", (req, res, ctx) => {
    return res(ctx.delay(delay), ctx.status(200), ctx.json(userListDummys));
  }),

  rest.get("/myuserinfo", (req, res, ctx) => {
    return res(ctx.delay(delay), ctx.status(200), ctx.json(myUserInfoDummys));
  }),
];
