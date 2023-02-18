class EdamanSerializer {
  static getSummary(recipes) {
    const allowedAttributes = [ "images", "url", "ingredientLines", "label"]
    let serializedEdaman = {}
    for (const attribute of allowedAttributes) {
      serializedEdaman[attribute] = recipes.recipe[attribute]
    }
    return serializedEdaman
  }
}

export default EdamanSerializer