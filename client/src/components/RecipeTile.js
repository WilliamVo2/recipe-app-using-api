import React from "react";
import { Link } from "react-router-dom"

const RecipeTile = ({ id, title }) => {

  return ( 
    <div className="callout">
      <Link to={`/recipes/${id}`}> {title} </Link>
    </div>
  )
}

export default RecipeTile