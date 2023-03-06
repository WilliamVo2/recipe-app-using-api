import React, { useState, useEffect } from "react";

import RecipeTile from "./RecipeTile.js";

const IngredientShowPage = (props) => {
  const [ingredient, setIngredient] = useState({ recipes: [] })
  
  const id = props.match.params.id

  const getIngredient = async () => {
    try {
      const response = await fetch(`/api/v1/ingredients/${id}`)
      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`

        const error = new Error(errorMessage)
        throw error
      }
      const ingredientData = await response.json()
      setIngredient(ingredientData.ingredient)
    } catch (error) {
      console.error(`Error in Ing-Show fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getIngredient()
  }, [])
  
  const recipeTileComponents = ingredient.recipes.map((recipeObject) => {
    return <RecipeTile key={recipeObject.id} {...recipeObject} />
  })

  return (
    <div className="ingredientAdd">
      <h1>{ingredient.name}</h1>
      {recipeTileComponents}
    </div>
  )
}

export default IngredientShowPage