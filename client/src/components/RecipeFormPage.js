import React, { useState, useEffect } from "react"
import { Link, Redirect } from "react-router-dom"

import IngredientOption from "./IngredientOption"
import ErrorList from "./ErrorList"
import translateServerErrors from "../services/translateServerErrors"

const RecipeFormPage = (props) => {
  const [errors, setErrors] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState({
    status: false,
    id: null
  })

  const [recipeName, setRecipeName] = useState("")

  const handleNameInput = (event) => {
    setRecipeName(event.currentTarget.value)
  }

  const [ingredients, setIngredients] = useState([])

  const getIngredientNames = async () => {
    try {
      const response = await fetch("/api/v1/ingredients")
      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const parseResponse = await response.json()
      setIngredients(parseResponse.ingredients)
    } catch (error) {
      console.error(`Error in RecipeForm fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getIngredientNames()
  }, [])

  const [recipeIngredients, setRecipeIngredients] = useState([])

  const handleIngredientQuantity = (event) => {
    const checkIfIngredientIsInRecipe = recipeIngredients.find((ingredient) => {
      ingredient.ingredientId == event.currentTarget.id
    })

    if(checkIfIngredientIsInRecipe) {
      const newSetOfIngredients = [...recipeIngredients]
      const ingredientToUpdateIndex = recipeIngredients.findIndex((ingredient) =>
      ingredient.ingredientId == event.currentTarget.id)

      if(event.currentTarget.value > 0) {
        newSetOfIngredients[ingredientToUpdateIndex] = {
          ...newSetOfIngredients[ingredientToUpdateIndex],
          count: event.currentTarget.value
        }
        setRecipeIngredients(newSetOfIngredients)
      } else {
        const newIngredient = {
          ingredientId: event.currentTarget.id,
          ingredientName: event.currentTarget.title,
          count: event.currentTarget.value
        }
        setRecipeIngredients([
          ...recipeIngredients,
          newIngredient
        ])
      }
    }
    const ingredientOptions = ingredients.map((option) => {
      let optionQuantity = ""
      const newRecipeIngredient = recipeIngredients.find((ingredient) => 
      ingredient.ingredientId === option.id)

      if(newRecipeIngredient) {
        optionQuantity = newRecipeIngredient.count
      }

      return (
        <IngredientOption
          key={option.id}
          optionQuantity = {optionQuantity}
          handleIngredientQuantity = {handleIngredientQuantity}
          {...option}
        />
      )
    })

    let recipeFor
    if (recipeName) {
      recipeFor = (
        <h4 className="text-center"> for <em>{recipeName}</em></h4>
      )
    }

    const ingredientSummary = recipeIngredients.map((ingredient) => {
      return (
        <li key={ingredient.ingredientId}>
          <b><em>{ingredient.ingredientName}</em></b>, quantity: <b><em>{ingredient.count}</em></b>
        </li>
      )
    })

    const handleSubmit = async (event) => {
      event.preventDefault()
      try {
        const response = await fetch("/api/v1/recipes", {
          method: "POST",
          headers: new Headers({
            "Accept": "application/json",
            "Content-Type": "application/json"
          }),
          body: JSON.stringify({ title: recipeName, ingredients: recipeIngredients })
        })
        if (!response.ok) {
          if (response.status === 422) {
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
          setShouldRedirect({
            status: true,
            id: body.recipe.id
          })
        }
      } catch (error) {
        console.error(`Error in handleSummit RecipeForm fetch: ${error.message}`)
      }
    }

    const handleClear = () => {
      setErrors({})
      setRecipeIngredients([])
      setRecipeName("")
    }

    if (shouldRedirect.status) {
      return <Redirect to={`/recipes/${shouldRedirect.id}`} />
    }

    return (
      <div className="grid-container">
        <h3><Link to="/recipes">Back to all Recipes</Link></h3>
        <div className="grid-x grid-margin-x callout primary">
          <div className="cell small-6">
            <div className="callout">
              <h2 className="text-center">build your Ingredient Recipe</h2>
              <h6 className="text-center"><em>Choose your ingredient name</em></h6>
              <h6 className="text-center"><em>Due to not much room for store food, 03 items per ingredient is an option</em></h6>
            </div>
            <div className="callout">
              <form onSubmit={handleSubmit}>
                <ErrorList errors={errors} />
                <div className="grid-x text-center align-justify align-middle">
                  <label htmlFor="title" className="cell small-3 h6">
                    <b><em>Recipe Title:</em></b>
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    value={recipeName}
                    onChange={handleNameInput}
                    className="cell auto align-middle"
                  />
                </div>

                <div className="grid-x grid-margin-x callout secondary">
                  {ingredientOptions}
                </div>

                <div className="button-group grid-x grid-margin-x align-space">
                  <input className="button cell small-4" type="submit" value="Submit" />
                  <button className="button cell small-4" type="button" onClick={handleClear}>Clear</button>
                </div> 
              </form>
            </div>
          </div>

          <div className="cell small-6 callout">
            <h2 className="text-center">Ingredient of Recipe Summary</h2>
            {recipeFor}
            <ul>{ingredientSummary}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default RecipeFormPage
