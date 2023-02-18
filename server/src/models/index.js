// include all of your models here using CommonJS requires
const User = require("./User.js")
const Recipe = require("./Recipe.js")
const UserRecipe = require("./UserRecipe.js")
const Ingredient = require("./Ingredient.js")
const PantryItem = require("./PantryItem.js")
const Upload = require("./Upload")

module.exports = {User, Recipe, UserRecipe, Ingredient, PantryItem, Upload};
