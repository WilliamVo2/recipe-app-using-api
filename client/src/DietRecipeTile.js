import React from "react"
import { Link } from "react-router-dom"

const DietRecipeTile = ({ id, label, ingredientLines, images, url })=> {
  return (
    <>
      <div className="dietTile">
        <p><img src={images}/> {label}</p>
        <p>Instruction: {ingredientLines}</p>
        <p><a href={url}>Link to the page</a></p>
      </div>
    </>
  )
}

export default DietRecipeTile