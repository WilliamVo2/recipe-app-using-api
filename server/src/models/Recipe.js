const Model = require('./Model')

class Recipe extends Model {
  static get tableName() {
    return "recipes"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title"],
      properties: {
        title: { type: "string" }
      }
    }
  }
  static get relationMappings() {
    const { UserRecipe, User } = require("./index")
    return {
      userRecipes: {
        relation: Model.HasManyRelation,
        modelClass: UserRecipe,
        join: {
          from: "recipes.id",
          to: "userRecipes.recipeId"
        }
      },
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: "recipes.js",
          through: {
            from: "userRecipes.recipeId",
            to: "userRecipes.userId"
          },
          to: "users.id"
        }
      }
    }
  }
}

module.exports = Recipe