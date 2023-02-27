import React, { useState, useEffect } from "react"

import NewReviewForm from "./NewReviewForm"
import ReviewTile from "./ReviewTile"
import ErrorList from "./ErrorList"
import translateServerErrors from "../services/translateServerErrors"

const RecipeShow = props => {
  const [recipe, setRecipe] = useState({
    title: "",
    reviews: []
  })
  
  const [errors, setErrors] = useState([])

  const recipeId = props.match.params.id

  const getRecipe = async () => {
    try {
      const response = await fetch(`/api/v1/recipes/${recipeId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const body = await response.json()
      setRecipe(body.recipe)
    } catch (error) {
      console.error(`Error in Show fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getRecipe()
  }, [])

  const postReview = async (newReviewData) => {
    try {
      const response = await fetch(`/api/v1/recipes/${recipeId}/reviews`,{
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newReviewData)
      })
      if (!response.ok) {
        if(response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          return setErrors(newErrors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      } else {
        const body = await response.json()
        const updatedReviews = recipe.reviews.concat(body.review)
        setRecipe({...recipe, reviews: updatedReviews})
      }
    } catch(error) {
      console.error(`Error in RecipeShow fetch: ${error.message}`)
    }
  }

  let reviewTiles
  if (recipe.reviews) {
    reviewTiles = recipe.reviews.map(reviewObject => {
      return (
        <ReviewTile
          key={reviewObject.id}
          {...reviewObject}
        />
      )
    })
  }

  return (
    <div>
      <div className="shows">
        <h1>{recipe.title}</h1>
      </div>
      <div>
        <ErrorList errors={errors} />
        <NewReviewForm
          postReview={postReview}
        />
      </div>
      <h4> Recipe Review:</h4>
        <ul>
          {reviewTiles} 
        </ul>
    </div>
  )
}

export default RecipeShow