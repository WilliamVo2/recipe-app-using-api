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
    const { UserRecipe, User, Quantity, Ingredient, Review} = require("./index.js")
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
          from: "recipes.id",
          through: {
            from: "userRecipes.recipeId",
            to: "userRecipes.userId"
          },
          to: "users.id"
        }
      },
      quantities: {
        relation: Model.HasManyRelation,
        modelClass: Quantity,
        join: {
          from: "recipes.id",
          to: "quantities.recipeId"
        }
      },
      ingredients: {
        relation: Model.ManyToManyRelation,
        modelClass: Ingredient,
        join: {
          from: "recipes.id",
          through: {
            from: "quantities.recipeId",
            to: "quantities.ingredientId"
          },
          to: "ingredients.id"
        }
      },
      reviews: {
        modelClass: Review,
        relation: Model.HasManyRelation,
        join: {
          from: "recipes.id",
          to: "reviews.recipeId"
        }
      }
    }
  }
}

module.exports = Recipe