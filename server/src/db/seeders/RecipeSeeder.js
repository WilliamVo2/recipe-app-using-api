import { Recipe, User } from "../../models/index.js";

class RecipeSeeder {
  static async seed() {
    const user1 =await User.query().findOne({ email:"tommyjon@gmail.com"})

    const recipesData = [
      {
        title: "Chicken Vesuvio",
      },
      {
        title: "Chicken Stew",
      },
      {
        title: "Chicken Live Pate",
      },
      {
        title: "Beef Tacos",
      },
      {
        title: "Beef Brisket",
      },
      {
        title: "Barbecued Beef",
      }
    ]
  }
}

export default RecipeSeeder
