import React from "react"
import { Link } from "react-router-dom"

const DietRecipeTile = ({ id, label, ingredientLines, images, url })=> {
  
  return (
    <>
      <div className="dietTile">
        <hr/>
        <p className="recipeLabel"> <a href={url}>{label}</a></p>
        <img className ="bottomLeft" src={images.THUMBNAIL.url} />
        <p className=""><b>Ingredients: </b>{ingredientLines}</p>
      </div>
    </>
  )
}

export default DietRecipeTile