const Model = require("./Model")

class PantryItem extends Model {
  static get tableName() {
    return "pantryItems"
  }
  
  static get relationMappings() {
    const { Ingredient, User } = require("./index.js")

    return {
      ingredient: {
        relation: Model.BelongsToOneRelation,
        modelClass: Ingredient,
        join: {
          from: "pantryItems.ingredientId",
          to: "ingredients.id"
        }
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "pantryItems.userId",
          to: "userId"
        }
      }
    }
  }
}

module.exports = PantryItem