import express from "express"
import objection from "objection"
const { ValidationError } = objection
import Upload from "../../../models/Upload.js"
import uploadImage from "../../../services/uploadImage.js"

const uploadsRouter = new express.Router()

uploadsRouter.get("/", async (req, res) => {
  try {
    const uploads = await Upload.query()
    return res.status(200).json({ uploads })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

uploadsRouter.post("/", uploadImage.single("image"), async (req, res) => {
  try {
    const { body } = req
    const data = {
      ...body,
      image: req.file.location,
    }

    console.log(req.file.location)

    const upload = await Upload.query().insertAndFetch(data)
    return res.status(201).json({ upload })
  } catch (error) {
    if (error instanceof ValidationError){
      return res.status(422).json({errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

export default uploadsRouter