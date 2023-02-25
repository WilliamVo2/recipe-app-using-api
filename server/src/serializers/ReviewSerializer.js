class ReviewSerializer {
  static getDetails(review) {
    const allowedAttributes = ["id", "reviewer", "body"]

    let serializedReview = {}

    for (const attribute of allowedAttributes) {
      serializedReview[attribute] = review[attribute]
    }
    return serializedReview
  }
}

export default ReviewSerializer