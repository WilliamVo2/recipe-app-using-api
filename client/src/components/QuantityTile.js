import React from "react"

const QuantityTile = ({ ingredient, count }) => {
  return (
    <div className="callout">
      <h4><em>{ingredient.name}</em></h4>
      <p>Quantity: <b>{count}</b></p>
    </div>
  )
}

export default QuantityTile