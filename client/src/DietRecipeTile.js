import React from "react"
import { Link } from "react-router-dom"

const DietRecipeTile = ({ id, label, ingredientLines, images, url })=> {
  return (
    <>
      <div className="dietTile">
        <p><img with="50" height="50" src={images} /> <a href={url}>{label}</a></p>
        <p>Instruction: {ingredientLines}</p>
        
      </div>
    </>
  )
}

export default DietRecipeTile