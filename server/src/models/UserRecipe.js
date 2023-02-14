const Model = require("./Model")

class UserRecipe extends Model {
  static get tableName() {
    return "userRecipes"
  }

  static get relationMappings() {
    const { Recipe, User } = require("./index")

    return {
      recipes: {
        relation: Model.BelongsToOneRelation,
        modelClass: AbortController,
        join: {
          from: "userRecipes.recipes",
          to: "recipes.id"
        }
      },
      users: {
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