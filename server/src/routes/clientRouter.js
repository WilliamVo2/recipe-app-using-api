import express from "express";
import getClientIndexPath from "../config/getClientIndexPath.js";


const router = new express.Router();

const clientRoutes = ["/", "/user-sessions/new", "/users/new", "/search", "/diets", "/users/image", "/recipes", "/recipes/:id", "/ingredients", "/ingredients/:id"];

const authedClientRoutes = ["/profiles", "/authed-profiles"];

router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath());
});



router.get(authedClientRoutes, (req, res)=> {
  if (req.user) {
    res.sendFile(getClientIndexPath());
  } else {
    res.redirect("/user-sections/new")
  }
});

export default router;
