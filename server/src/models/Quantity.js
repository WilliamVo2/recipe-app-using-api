const Model = require("./Model")

class Quantity extends Model {
  static get tableName() {
    return "quantities"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["count"],
      properties: {
        count: { type: ["integer", "string"] }
      }
    }
  }

  static get relationMappings() {
    const { Recipe, Ingredient } = require("./index.js")

    return {
      recipe: {
        relation: Model.BelongsToOneRelation,
        modelClass: Recipe,
        join: {
          from: "quantities.recipeId",
          to: "recipes.id"
        }
      },
      ingredient: {
        relation: Model.BelongsToOneRelation,
        modelClass: Ingredient,
        join: {
          from: "quantities.ingredientId",
          to: "ingredients.id"
        }
      }
    }
  }
}

module.exports = Quantity