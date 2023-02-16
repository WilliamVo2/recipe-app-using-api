import got from "got"
import dotenv from "dotenv"
dotenv.config()

const openRecipeApiKey=process.env.EDAMAM_API_KEY
const openRecipeId=process.env.EDAMAM_API_ID
const baseUrl= "https://api.edamam.com/api/recipes/v2"
//const recipeSearchUrl= `${baseUrl}?type=public&q=diet&app_id=${openRecipeId}&app_key=%20${openRecipeApiKey}`

class OpenRecipeClient {
  static async getRecipes(diet) {
    try {
      const url = `${baseUrl}?type=public&q=${diet}&app_id=${openRecipeId}&app_key=%20${openRecipeApiKey}&random=true`;
      const apiResponse = await got(url)
      const responseBody = apiResponse.body
      return responseBody
    }catch (error) {
      return { error: error.message }
    }
  }
}

export default OpenRecipeClient