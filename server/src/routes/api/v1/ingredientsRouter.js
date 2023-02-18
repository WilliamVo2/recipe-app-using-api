import express from "express"
import objection from "objection"
const { ValidationError } = objection

import { Order } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"
import IngredientSerializer from "../../../serializers/IngredientSerializer.js"

const ingredientsRouter = new express.Router()

ingredientsRouter.get("/", async (req, res) => {
  try {
    const ingredients = await Ingredient.query()
    const serializedIngredients = ingredients.map(ingredient => IngredientSerializer.getSummary(ingredient))

    return res.status(200).json({ ingredients: serializedIngredients })
  } catch (error) {
    return res.status(500).json({ errors:error })
  }
})

ingredientsRouter.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const ingredient = await Ingredient.query().findById(id)
    const serializedIngredient = await IngredientSerializer.getSummaryWithIngredients(ingredient)

    return res.status(200).json({ ingredient: serializedIngredient })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ errors: error })
  }
})

export default ingredientsRouter

