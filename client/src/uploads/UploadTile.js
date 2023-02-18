import React from "react"

const UploadTile = (props) => {

  return (
    <div className="callout secondary">
      <img src={props.upload.image} />
    </div>
  )
}

export default UploadTile