/* eslint-disable import/no-extraneous-dependencies */
const Bcrypt = require("bcrypt");
const unique = require("objection-unique");
const Model = require("./Model");

const saltRounds = 10;

const uniqueFunc = unique({
  fields: ["email"],
  identifiers: ["id"],
});

 class User extends uniqueFunc(Model) {
  static get tableName() {
    return "users";
  }

  set password(newPassword) {
    this.cryptedPassword = Bcrypt.hashSync(newPassword, saltRounds);
  }

  authenticate(password) {
    return Bcrypt.compareSync(password, this.cryptedPassword);
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["email", "firstName", "lastName"],
      properties: {
        email: { type: "string" },
        cryptedPassword: { type: "string" },
        firstName: { type: "string", minLength: 1 },
        lastName: { type: "string", minLength: 1}
      }
    }
  }
  static get relationMapping(){
    const {UserRecipe, Recipe, PantryItem, Ingredient} = require("./index.js")

    return {
      userRecipes: {
        relation: Model.HasManyRelation,
        modelClass: UserRecipe,
        join: {
          from: "users.id",
          to: "userRecipes.userId"
        }
      },
      recipes: {
        relation: Model.ManyToManyRelation,
        modelClass: Recipe,
        join: {
          from: "users.id",
          through: {
            from: "userRecipes.userId",
            to: "userRecipes.recipeId"
          },
          to: "recipes.id"
        }
      },
      pantryItems: {
        relation: Model.HasManyRelation,
        modelClass: PantryItem,
        join: {
          from: "users.id",
          to: "pantryItems.userId"
        }
      },
      ingredients: {
        relation: Model.ManyToManyRelation,
        modelClass: Ingredient,
        join: {
          from: "users.id",
          to: "pantryItems.ingredientId"
        },
        to: "ingredients.is"
      }
    }
  }

  $formatJson(json) {
    const serializedJson = super.$formatJson(json);

    if (serializedJson.cryptedPassword) {
      delete serializedJson.cryptedPassword;
    }

    return serializedJson;
  }
}

module.exports = User;
