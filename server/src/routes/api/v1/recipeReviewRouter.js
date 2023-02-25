import express from "express"
import objection from "objection"
const { ValidationError }  = objection

import { Review} from "../../../models/index.js"
import ReviewSerializer from "../../../serializers/ReviewSerializer.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

const recipeReviewsRouter  = new express.Router({ mergeParams: true})

recipeReviewsRouter.post("/", async (req,res) => {
  const { body } = req
  const formInput = cleanUserInput(body)

  formInput.recipeId = req.params.recipeId
  try {
    const review = await Review.query().insertAndFetch(formInput)
  
    const serializedReview = ReviewSerializer.getDetails(review)
  
    return res.status(201).json ({ review: serializedReview })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data})
    }
    return res.status(500).json({ errors: error })
  }
})

export default recipeReviewsRouter
