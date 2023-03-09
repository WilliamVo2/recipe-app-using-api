import React from "react"

const IngredientOption = ({ id, name, optionQuantity, handleIngredientQuantity }) => {
  const counts = [0, 1, 2, 3]

  const countOptions = counts.map((count) => {
    return (
      <div key={`${id}-${count}`} className="cell small-3">
        <label htmlFor={id}>
          {count}
        </label>
        <input
          id={id}
          type="radio"
          name={name}
          value={count}
          checked={optionQuantity == count}
          onChange={handleIngredientQuantity}
        />
      </div>
    )
  })

  return (
    <div className="cell small-6 callout text-center">
      <p><b><em>{name}</em></b></p>
      <div className="grid-x">
        {countOptions}
      </div>
    </div>
  )
}

export default IngredientOption