import express from "express";
import passport from "passport";
const { ValidationError } = "objection"

import { User } from "../../../models/index.js";
import cleanUserInput from "../../../services/cleanUserInput.js";
import UserSerializer from "../../../serializers/UserSerializer.js";
import uploadImage from "../../../services/uploadImage.js"

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

usersRouter.post("/", uploadImage.single("image"), async (req, res) => {
  const formInput = cleanUserInput(req.body)
  const { firstName, lastName, email, password, passwordConfirmation } = formInput;
  let image = ""
  if(req.file) {
    image = req.file.location
  }

  try {
    const persistedUser = await User.query().insertAndFetch({ email, password, firstName, lastName, image });
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

usersRouter.patch("/", uploadImage.single("image"), async(req, res) =>{
  try {
    const userId = req.user.id
    const image = req.file.location
    const selectedUser = await User.query().findById(userId)
    const updatedUser = await selectedUser.$query().patchAndFetchById(userId, {image: image})
    return res.status(201).json({ updatedUser })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

usersRouter.get("/image", async (req, res) => {
  if (req.user) {
    const userId = req.user.id
    try {
      const user = await User.query().findById(userId)
      return res.status(200).json({ image: user.image })
    } catch (error) {
      return res.status(500).json({ errors: error })
    }
  } else {
    res.status(200).json({ image: null })
  }
})

export default usersRouter;
