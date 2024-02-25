"use strict";

const t = require("tap");
const { buildApp } = require("./helper");

t.test("cannot access protected routes", async (t) => {
  const app = await buildApp(t);
  const privateRoutes = ["/me"];
  for (const url of privateRoutes) {
    const response = await app.inject({ method: "GET", url });
    t.equal(response.statusCode, 401);
    t.same(response.json(), {
      statusCode: 401,
      error: "Unauthorized",
      message: "No Authorization was found in request.headers",
    });
  }
});

t.test("register the user", async (t) => {
  const app = await buildApp(t);
  const response = await app.inject({
    method: "POST",
    url: "/register",
    payload: {
      username: "test",
      password: "icanpass",
    },
  });
  t.equal(response.statusCode, 201);
  t.same(response.json(), { registered: true });
});
