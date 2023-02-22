import { Quantity } from "../../models/index.js"

class QuantitySeeder {
  static async seed() {
    const quantitiesData = [
      {
        count: 3,
        recipeId: 1,
        ingredientId: 2
      },
      {
        count: 1,
        recipeId: 2,
        ingredientId: 3
      },
      {
        count: 3,
        recipeId: 2,
        ingredientId: 1
      },
      {
        count: 2,
        recipeId: 3,
        ingredientId: 1
      },
      {
        count: 3,
        recipeId: 1,
        ingredientId: 1
      },
      {
        count: 5,
        recipeId: 2,
        ingredientId: 2
      }
    ]
    for (const quantitySeed of quantitiesData) {
      const currentQuantity = await Quantity.query().findOne({ count: quantitySeed.count})
      if(!currentQuantity) {
        await Quantity.query().insert(quantitySeed)
      }
    }
  }
}

export default QuantitySeeder