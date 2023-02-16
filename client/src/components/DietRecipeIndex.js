import React, { useState, useEffect } from 'react'

const DietRecipeIndex = props => {
  
  const [dietRecipes, setDietRecipes]= useState({
    label: "",
    ingredientLines: "",
    ingredients: "",
    images:""
  })

  const fetchDiet = async () => {
    try {
      const diet = "low-sodium"
      const response = await fetch(`api/v1/diets?diet=${low-sodium}`)
      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage);
        throw(error);
      }
      const dietRecipe = await response.json();
      return dietRecipe;
    } catch (err) {
      console.error(`Error in fetchDiet: ${err.message}`);
    }
  }
  let recipeData;
  let ingredientLines;
  let description;
  useEffect(() => {
    (async () => {
      recipeData = await fetchDiet()
      console.log(recipeData)
      setDietRecipes({ 
        images: recipeData.recipe[0].images,
        description: recipeData.recipe[0].label,
        ingredientLines: recipeData.recipe.ingredientLines,
        ingredients: recipeData.recipe.ingredients
      })
    })();
  }, [])
  //debugger
  return (
    <div className='container'>
      <h1>Diet Recipe Search</h1>
      <p>{dietRecipes.images}</p>
      <p>Content: {dietRecipes.description}</p>
      <p>Instruction: {dietRecipes.ingredientLines}</p>
      <p>Ingredients: {dietRecipes.ingredients}</p>
    </div>
  )
}

export default DietRecipeIndex