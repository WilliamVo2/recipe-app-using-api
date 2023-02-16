import express from "express"

import OpenRecipeClient from "../../../../apiClient/OpenRecipeClient.js"

const dietRecipeClientRouter = new express.Router()

dietRecipeClientRouter.get("/", async (req, res) => {
  const diet = req.query.diet

  try {
    const recipesResponse = await OpenRecipeClient.getRecipes(diet)
    const recipesData = JSON.parse(recipesResponse)
    const recipes = recipesData.hits

    EdamanSerializer.getSummary(recipes)

    return res
      .set({ "Content-Type": "application/json" })
      .status(200)
      .json({ recipes })
  } catch (error) {
    return res.status(401).json({ errors: error })
  }
})


class EdamanSerializer {
  static getSummary(recipes){

    const serializedRecipes = recipes.map(recipeObject => {
      //return 
    })

    

  }


}


export default dietRecipeClientRouter