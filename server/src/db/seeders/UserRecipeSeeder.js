import { UserRecipe, User } from "../../models/index.js"

class UserRecipeSeeder {
  static async seed () {
    
    const userRecipeData = [
      {
        recipeId: 1,
        userId: 2
      },
      {
        recipeId: 2,
        userId: 2
      },
      {
        recipeId: 3,
        userId: 1
      },
      {
        recipeId: 1,
        userId: 2
      },
      {
        recipeId: 2,
        userId: 3
      },
      {
        recipeId: 3,
        userId: 2
      }
    ]
    for (const singleUserRecipeData of userRecipeData) {
      const currentUserRecipe = await UserRecipe.query().findOne(singleUserRecipeData)
      if(!currentUserRecipe) {
        await UserRecipe.query().insert(singleUserRecipeData)
      }
    }
  }
}

export default UserRecipeSeeder