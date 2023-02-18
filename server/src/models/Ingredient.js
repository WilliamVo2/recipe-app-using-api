const Model = require("./Model")

class Ingredient extends Model {
  static get tableName() {
    return "ingredients"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string", minLength: 1, maxLength: 20 }
      }
    }
  }

  static get relationMappings() {
    const { User, PantryItem } = require("./index.js")

    return {
      pantryItems: {
        relation: Model.HasManyRelation,
        modelClass: PantryItem,
        join: {
          from: "ingredients.id",
          to: "pantryItems.ingredientId"
        }
      },
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: "ingredients.id",
          through: {
            from: "pantryItems.ingredientId",
            to: "pantryItems.userId"
          },
          to: "users.id"
        }
      }
    }
  }
}

module.exports = Ingredient