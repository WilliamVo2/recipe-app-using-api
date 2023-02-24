import React, { useState, useEffect } from "react";

const UserProfileImage = (props) => {
  const [image, setImage] = useState ({})

  const getUserImage = async() =>{
    try {
      const response = await fetch("/api/v1/users/image")
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      } else {
        const body = await response.json()
        setImage(body.image)
      }
    } catch (error) {
      console.error(`Error in change image fetch: ${error.message}`)
    }
  }

  useEffect(() =>{
    getUserImage()
  }, [])

  let imageDisplay 
  if (image) {
    imageDisplay=<img className="user-img" src={image} />
  }
  return (
    <>
      {imageDisplay}
    </>
  )
}

export default UserProfileImage