import React, { useState, useEffect } from 'react'
import DietRecipeTile from '../DietRecipeTile'

const DietRecipeIndex = props => {
  
  const [dietRecipes, setDietRecipes]= useState([])

  const fetchDiet = async () => {
    try {
      const  method= "low-sodium"
      const response = await fetch(`api/v1/diets?diet=${method}`)
      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage);
        throw(error);
      }
      const dietRecipe = await response.json();
      setDietRecipes(dietRecipe.recipes)
    } catch (err) {
      console.error(`Error in fetchDiet: ${err.message}`);
    }
  }
  
  useEffect(() => {
    fetchDiet()  
   } ,[])
  
   const  dietComponents = dietRecipes.map((dietObject) => {
     return (
       <DietRecipeTile
         key={dietObject.id}
         {...dietObject}
       />
     )
   })
 
  return (
    <div className='container'>
      <h1>Diet Recipe Search</h1>
      {dietComponents}
    </div>
  )
}

export default DietRecipeIndex