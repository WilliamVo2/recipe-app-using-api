import React from "react"

const ReviewTile = ({  reviewer, body }) => {
  return (
    <div className="callout">
      <h5> {reviewer} Review: </h5>
      <p> {body} </p>
    </div>
  )
}

export default ReviewTile