import React from "react"
import { Link } from "react-router-dom"

const DietRecipeTile = ({ id, label, ingredientLines, images, url })=> {
  
  return (
    <>
      <div className="dietTile">
        <div className="main">
          <article>
            <p className="recipeLabel"> <a href={url}target="_blank">{label}</a></p>
            <img className ="images" src={images.THUMBNAIL.url} />
            <p className="ingredient"><b>Ingredients: </b>{ingredientLines}</p>
          </article>
          <aside>
            <h4>References</h4>
            <ul>
              <li><a href="#">Your review</a></li>
              <li><a href="https://www.millcitypizza.com/" target="_blank">Pizza near You</a></li>
            </ul>
          </aside>
        </div>
        <footer>
          <p>@Copyright 2023 by Bill. All rights reversed</p>
        </footer>
      </div>
    </>
  )
}

export default DietRecipeTile