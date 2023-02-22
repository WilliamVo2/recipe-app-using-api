import { PantryItem } from "../../models/index.js";

class PantryItemSeeder {
  static async seed() {
    const pantryItemsData = [
      {
        userId: 3,
        ingredientId:1
      },
      {
        userId: 1,
        ingredientId: 3
      },
      {
        userId: 2,
        ingredientId: 3
      },
      {
        userId: 3,
        ingredientId: 4
      },
      {
        userId: 1,
        ingredientId: 2
      },
      {
        userId: 2,
        ingredientId: 2
      }
    ]
    for (const singlePantryItemData of pantryItemsData) {
      const currentPantryItem = await PantryItem.query().findOne(singlePantryItemData)
      if(!currentPantryItem){
        await PantryItem.query().insert(singlePantryItemData)
      }
    }
  }
}

export default PantryItemSeeder