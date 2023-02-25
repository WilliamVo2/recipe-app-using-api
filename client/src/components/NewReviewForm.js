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
      <h4>Your food recipes review:</h4>
      <form onSubmit={handleSubmit} >
        <label>
          Reviewer:
          <input 
            type="text" 
            name="reviewer" 
            onChange={handleInputChange} 
            value= {newReview.reviewer}
            />
        </label>

        <label>
          Body:
          <input
            type="text"
            name="body"
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