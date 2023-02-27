import React, { useState, useEffect } from "react"
import RecipeTile from "./RecipeTile.js"

const RecipeListPage = () =>{
  const [recipes, setRecipes] = useState([])

  const getRecipes = async () =>{
    try {
      const response = await fetch('/api/v1/recipes')
      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw (error)
      }
      const parsedResponse = await response.json()
      setRecipes(parsedResponse.recipes)
    } catch (error) {
      console.error(`Error in RecipeLisPage fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getRecipes()
  }, [])

  const recipeTileComponents = recipes.map( recipeObject => {
    return(
      <RecipeTile
        key={recipeObject.id}
        {...recipeObject}
        />
    )
  })

  return(
    <div className="callout">
      <h2>Recipes List:</h2>
      {recipeTileComponents}
    </div>
  )
}

export default RecipeListPage