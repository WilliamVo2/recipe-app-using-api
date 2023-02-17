import express from "express"

import OpenRecipeClient from "../../../../apiClient/OpenRecipeClient.js"
import EdamanSerializer from "../../../serializers/EdamanSerializer.js"

const dietRecipeClientRouter = new express.Router()

dietRecipeClientRouter.get("/", async (req, res) => {
  const diet = req.query.diet

  try {
    const recipesResponse = await OpenRecipeClient.getRecipes(diet)
    const recipesData = await JSON.parse(recipesResponse)
    const recipes = recipesData.hits

    const serializedRecipes = recipes.map(recipe => {
      return EdamanSerializer.getSummary(recipe)
    }) 

    return res
      .set({ "Content-Type": "application/json" })
      .status(200)
      .json({ recipes: serializedRecipes })
  } catch (error) {
    return res.status(401).json({ errors: error })
  }
})

export default dietRecipeClientRouter