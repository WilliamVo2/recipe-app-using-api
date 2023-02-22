const Model = require("./Model")

class UserRecipe extends Model {
  static get tableName() {
    return "userRecipes"
  }

  static get relationMappings() {
    const { Recipe, User } = require("./index.js")

    return {
      recipe: {
        relation: Model.BelongsToOneRelation,
        modelClass: Recipe,
        join: {
          from: "userRecipes.recipeId",
          to: "recipes.id"
        }
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "userRecipes.userId",
          to: "users.id"
        }
      }
    }
  }
}

module.exports = UserRecipe