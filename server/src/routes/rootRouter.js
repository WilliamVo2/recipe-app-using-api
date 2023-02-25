import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import dietRecipeClientRouter from "./api/v1/dietRecipeClientRouter.js";
import clientRouter from "./clientRouter.js";
import recipesRouter from "./recipesRouter.js";
import uploadsRouter from "./api/v1/uploadsRouter.js";
import recipesv1Router from "./api/v1/recipesv1Router.js";

const rootRouter = new express.Router();
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/diets", dietRecipeClientRouter);
rootRouter.use("/api/v1/uploads", uploadsRouter);
rootRouter.use("/api/v1/recipes", recipesv1Router)
rootRouter.use("/search", recipesRouter);

rootRouter.use("/", clientRouter);
export default rootRouter;
