import React from "react"

const AuthedUserProfile = (props) => {

  let message = ""
  if (props.user !== undefined) {
    message = props.user.email
  }

  return (
    <> 
      <h1>ONLY SIGNED IN  USERS CAN SEE</h1>
      <h5>The current user is: {message} </h5>
    </>
  )
}

export default AuthedUserProfile