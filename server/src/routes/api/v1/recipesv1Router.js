import express from "express"

import { Recipe } from "../../../models/index.js"
import recipeReviewsRouter from "./recipeReviewRouter.js"

import RecipeSerializer from "../../../serializers/RecipeSerializer.js"

const recipesv1Router = new express.Router()

recipesv1Router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.query()
    return res.status(200).json({ recipes: recipes})
  } catch (error){
    return res.status(500).json({ errors: error })
  }
})

recipesv1Router.get("/:id", async (req, res) => {
  const id = req.params.id

  try {
    const recipe = await Recipe.query().findById(id)
    recipe.reviews = await recipe.$relatedQuery("reviews")

    const serializedRecipe = await RecipeSerializer.getDetails(recipe)

    return res.status(200).json({ recipe: serializedRecipe })
  } catch (err) {
    return res.status(500).json({ errors: err})
  }
})

recipesv1Router.use("/:recipeId/reviews", recipeReviewsRouter)

export default recipesv1Router