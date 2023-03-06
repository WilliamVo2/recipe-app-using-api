import React from "react"
import { Link } from "react-router-dom"

const IngredientTile = ({ id, name }) => {
  return (
    <li className="ingredientAdd">
      <Link to={`/ingredients/${id}`}>
        {name}
      </Link>
    </li>
  )
}

export default IngredientTile