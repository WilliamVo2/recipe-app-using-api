import PantryItemsSerializer from "./PantryItemsSerializer.js";

class IngredientSerializer {
  static getSummary(ingredient) {
    const allowedAttributes = ["id", "name"]
    let serializedIngredient = {}
    for (const attribute of allowedAttributes) {
      serializedIngredient[attribute] = ingredient[attribute]
    }
    return serializedIngredient
  }

  static async getSummaryWithIngredients(ingredient) {
    const allowedAttributes = ["id", "name"]
    let serializedIngredient = {}
    for (const attribute of allowedAttributes) {
      serializedIngredient[attribute] = ingredient[attribute]
    }

    const pantryItems = await ingredient.$relationQuery("pantryItems")
    console.log(orderDetails)

    const serializedPantryItems = await Promise.all(
      pantryItems.map(async (pantryItem) => await IngredientSerializer.getSummary(pantryItem))
    )
    serializedIngredient.items = serializedPantryItems
    
    return serializedIngredient
  }
}

export default IngredientSerializer