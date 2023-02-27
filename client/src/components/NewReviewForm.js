import React, { useState } from "react";
const NewReviewForm = ({ postReview }) => {
  const [newReview, setNewReview] = useState({
    reviewer: "",
    body: ""
  })

  const handleInputChange = event => {
    setNewReview({
      ...newReview,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    postReview(newReview)
    clearForm()
  }

  const clearForm = () => {
    setNewReview({ 
      reviewer: "",
      body: ""
    })
  }

  return (
    <div className="callout">
      <form onSubmit={handleSubmit} >
        <label>
          <h5>Reviewer:</h5>
          <input 
            type="text" 
            name="reviewer" 
            id="reviewer"
            onChange={handleInputChange} 
            value= {newReview.reviewer}
            />
        </label>

        <label>
          <h6>Body:</h6>
          <input
            type="text"
            name="body"
            id="body"
            onChange={handleInputChange}
            value={newReview.body}
          />
        </label>

        <div className="button-review">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default NewReviewForm