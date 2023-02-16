/* eslint-disable no-console */
import { connection } from "../boot.js"
import RecipeSeeder from "./seeders/RecipeSeeder.js"
import UserSeeder from "./seeders/UserSeeder.js"

class Seeder {
  static async seed() {
    // include individual seed commands here
    await UserSeeder.seed()
    await RecipeSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder