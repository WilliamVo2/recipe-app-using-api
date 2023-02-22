import { Recipe } from "../../models/index.js";

class RecipeSeeder {
  static async seed() {

    const recipesData = [
      {
        title: "Chicken Vesuvio"
      },
      {
        title: "Chicken Pot Pie Soup"
      },
      {
        title: "Ramen Noodle Skillet with Steak"
      },
      {
        title: "Instant Pot Turkey Sausage and Kale Soup"
      },
      {
        title: "Beef Brisket"
      },
      {
        title: "Barbecued Beef"
      }
    ]
    for (const recipesSeeder of recipesData) {
      const currentRecipe = await Recipe.query().findOne({title: recipesSeeder.title})
      if(!currentRecipe){
        await Recipe.query().insert(recipesSeeder)
      }
    }
  }
}

export default RecipeSeeder
