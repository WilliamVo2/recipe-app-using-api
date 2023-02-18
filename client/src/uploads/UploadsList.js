import React, { useEffect, useState } from "react"
import Dropzone from "react-dropzone"

import UploadTile from "./UploadTile"

const UploadsList = (props) => {
  const [uploads, setUploads] = useState([])
  const [newUploadFromData, setNewUploadFromData] = useState({
    image: {}
  })

  const getUploads = async () => {
    try {
      const response = await fetch("/api/v1/memes")
      if(!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      setUploads(body.uploads)
    } catch (error) {
      console.error(`Error in getUpload Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getUploads
  }, [])

  const uploadTiles = uploads.map((upload) => {
    return (
      <UploadTile
        key={upload.id}
        upload={upload}
      />
    )
  })

  // const handleInputChange = (event) => {
  //   event.preventDefault()
  //   setNewUploadFromData({
  //     ...newUploadFromData,
  //     [event.currentTarget.name]: event.currentTarget.value
  //   })
  // }

  const handleImageUpload = (acceptedImage) => {
    setNewUploadFromData({
      ...newUploadFromData,
      image: acceptedImage[0]
    })
  }

  const addUpload = async (event) => {
    event.preventDefault()
    const newUploadFromData = new FormData()
    newUploadBody.append("image", newUploadFromData.image)

    try {
      const response = await fetch("api/v1/uploads", {
        method: "POST",
        headers: {
          "Accept":"image/jpeg"
        },
        body: newUploadBody
      })
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      setUploads([
        ...uploads,
        body.upload
      ])
    } catch (error) {
      console.error(`Error in addUpload fetch: ${error.message}`)
    }
  }

  return (
    <div>
        <form className="callout primary" onSubmit={addUpload}>
          <Dropzone onDrop={handleImageUpload} >
            {({getRootProps, getInputProps}) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Upload Your image - drag 'n' drop or click to upload</p>
                </div>
              </section>
            )}
          </Dropzone>

          <input className="button" type="submit" value="Add" />
        </form>

        <div>
          {uploadTiles}
        </div>
    </div>
  )




}

export default UploadsList