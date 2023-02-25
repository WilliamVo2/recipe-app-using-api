/* eslint-disable no-console */
import { connection } from "../boot.js"
import IngredientSeeder from "./seeders/IngredientSeeder.js"
import RecipeSeeder from "./seeders/RecipeSeeder.js"
import UserSeeder from "./seeders/UserSeeder.js"
import PantryItemSeeder from "./seeders/PantryItemSeeder.js"
import QuantitySeeder from "./seeders/QuantitySeeder.js"
import UserRecipeSeeder from "./seeders/UserRecipeSeeder.js"
import ReviewSeeder from "./seeders/ReviewSeeder.js"

class Seeder {
  static async seed() {
    // include individual seed commands here
    await UserSeeder.seed()
    await RecipeSeeder.seed()
    await IngredientSeeder.seed()
    await PantryItemSeeder.seed()
    await QuantitySeeder.seed()
    await UserRecipeSeeder.seed()
    await ReviewSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder