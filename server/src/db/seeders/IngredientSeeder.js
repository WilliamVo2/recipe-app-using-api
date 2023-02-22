import { User, Recipe, Ingredient } from "../../models/index.js"

class IngredientSeeder {
  static async seed() {
  
    const ingredientData = [
      {
        name: "Vegetable Oil"
      },
      {
        name: "Chicken"
      },
      {
        name: "Smoke Tuna"
      },
      {
        name: "Skirt steak"
      },
      {
        name: "Ginger"
      },{
        name: " Broccoli"
      },
      {
        name: "Chicken broth"
      }
    ]
    for (const ingredientSeed of ingredientData) {
      const currentIngredient = await Ingredient.query().findOne({ name: ingredientSeed.name })
      if (!currentIngredient) {
        await Ingredient.query().insert(ingredientSeed)
      }
    }
  }
}
export default IngredientSeeder
