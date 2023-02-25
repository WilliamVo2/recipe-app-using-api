import { Review } from "../../models/index.js"

class ReviewSeeder {
  static async seed () {
    const reviewsData = [
      {
        reviewer: "Sonny",
        body: "This my plate, for everyday!",
        recipeId: 1 
      },
      {
        reviewer: "Amy",
        body: "Will come back!",
        recipeId: 2
      },
      {
        reviewer: "Lilly",
        body: "Nice place, good dinner!",
        recipeId: 3
      },
      {
        reviewer: "Franky",
        body: "This my plate, for everyday!",
        recipeId: 5 
      },
      {
        reviewer: "Mark",
        body: "Amazing, good taste!",
        recipeId: 2
      },
      {
        reviewer: "Neo",
        body: "Delicious!",
        recipeId: 1 
      },
      {
        reviewer: "Sonny",
        body: "This my plate, for everyday!",
        recipeId: 4 
      },
      {
        reviewer: "Ann",
        body: "Love it! This my plate, for everyday!",
        recipeId: 6
      }
    ]
    for (const reviewsSeed of reviewsData) {
      const currentReview = await Review.query().findOne({ reviewer: reviewsSeed.reviewer})
      if (!currentReview) {
        await Review.query().insert(reviewsSeed)
      }
    }
  }
}

export default ReviewSeeder