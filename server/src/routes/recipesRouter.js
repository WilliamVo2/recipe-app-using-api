import express from "express"

const recipesRouter = new express.Router()

const recipesData = [
  "Chicken Vesuvio",
  "Chicken Paparikash",
  "Baked Chicken",
  "Catalan Chicken",
  "Chicken Stew",
  "Chicken Liver Pate"
]

recipesRouter.get("/", (req, res) =>{
  let recipesFound = recipesData.filter(name => {
    if(req.query.search) {
      return name.startsWith(req.query.search)
    }
    else {
      return true
    }
  })
  res.render("search", { recipesFound: recipesFound || [] })
})

export default recipesRouter