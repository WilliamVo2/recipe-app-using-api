import React, { useState, useEffect } from "react"
import IngredientTile from "./IngredientTile.js"

const IngredientListPage = () => {
  const [ingredients, setIngredients] = useState([])

  const getIngredients = async () => {
    try {
      const response = await fetch("api/v1/ingredients")
      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const parsedResponse = await response.json()
      setIngredients(parsedResponse.ingredients)
    } catch (error) {
      console.error(`Error in Ingredient fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getIngredients()
  }, [])
  
  const ingredientTileComponents = ingredients.map((ingredientObject) => {
    return <IngredientTile key={ingredientObject.id} {...ingredientObject} />
  })

  return (
    <div className="ingredientAdd">
      <h1>Ingredients:</h1>
      {ingredientTileComponents}
    </div>
  )
}

export default IngredientListPage