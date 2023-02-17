import express from "express";
import passport from "passport";
const { ValidationError } = "objection"

import { User } from "../../../models/index.js";
import cleanUserInput from "../../../services/cleanUserInput.js";
import UserSerializer from "../../../serializers/UserSerializer.js";

const usersRouter = new express.Router();

usersRouter.get("/", async (req, res) => {
  try {
    const users = await User.query()
    const serializedUsers = users.map(user => UserSerializer.getSummary(user))

    return res.status(200).json({ users: serializedUsers })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

usersRouter.post("/", async (req, res) => {
  const formInput = cleanUserInput(req.body)
  const { firstName, lastName, email, password, passwordConfirmation } = formInput;

  try {
    const persistedUser = await User.query().insertAndFetch({ email, password, firstName, lastName });
    return req.login(persistedUser, () => {
      return res.status(201).json({ user: persistedUser });
    });
  } catch (error) {
    console.log(error);
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error })
  }
});

export default usersRouter;
