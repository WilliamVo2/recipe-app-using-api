import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import recipesRouter from "./recipesRouter.js";
const rootRouter = new express.Router();
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/recipes", recipesRouter)

rootRouter.use("/", clientRouter);
export default rootRouter;
