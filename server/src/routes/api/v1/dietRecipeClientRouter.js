import express from "express"

import OpenRecipeClient from "../../../../apiClient/OpenRecipeClient.js"

const dietRecipeClientRouter = new express.Router()

dietRecipeClientRouter.get("/", async (req, res) => {
  const diet = req.query.diet

  try {
    const recipesResponse = await OpenRecipeClient.getRecipes(diet)
    const recipesData = JSON.parse(recipesResponse)
    return res
      .set({ "Content-Type": "application/json" })
      .status(200)
      .json(recipesData)
  } catch (error) {
    return res.status(401).json({ errors: error })
  }
})

export default dietRecipeClientRouter