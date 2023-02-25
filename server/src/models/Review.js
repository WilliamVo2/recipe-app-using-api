const Model = require("./Model")

class Review extends Model {
  static get tableName() {
    return "reviews"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["reviewer", "body"],
      properties: {
        reviewer: { type: "string" },
        body: { type: "string", minLength: 1, maxLength:225},
        recipeId: { type: ["string", "integer"] }
      }
    }
  }
  static get relationMappings() {
    const { Recipe } = require("./index.js")
    return {
      recipes: {
        modelClass: Recipe,
        relation: Model.BelongsToOneRelation,
        join: {
          from: "reviews.recipeId",
          to: "recipes.id"
        }
      }
    }
  }
}

module.exports = Review