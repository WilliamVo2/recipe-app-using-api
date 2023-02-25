class RecipeSerializer {
  static async getDetails(recipe) {
    const allowedAttributes =["id", "title"]

    let serializedRecipe = {}
    for (const attribute of allowedAttributes) {
      serializedRecipe[attribute]= recipe[attribute]
    }

    const relatedReviews = await recipe.$relatedQuery("reviews")
    
    serializedRecipe.reviews = relatedReviews

    return serializedRecipe
  }

}

export default RecipeSerializer