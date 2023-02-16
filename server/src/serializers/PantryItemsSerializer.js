import UserSerializer from "./UserSerializer.js"

class PantryItemsSerializer {
  static async getSummary(pantryItem) {
    const allowedAttributes = ["id"]
    let serializedPantryItem = {}
    for (const attribute of allowedAttributes) {
      serializedPantryItem[attribute] = pantryItem[attribute]
    }
    const relatedUser = await pantryItem.$relatedQuery("user")
    const serializedUser = UserSerializer.getSummary(relatedUser)
    serializedPantryItem.donut = serializedUser

    return serializedPantryItem
  }
}

export default PantryItemsSerializer