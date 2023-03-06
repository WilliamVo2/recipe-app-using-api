import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { hot } from "react-hot-loader/root"

import getCurrentUser from "../services/getCurrentUser"
import "../assets/scss/main.scss"
import RegistrationForm from "./registration/RegistrationForm"
import SignInForm from "./authentication/SignInForm"
import ChangeUserImage from "../uploads/ChangeUserImage"

import TopBar from "./layout/TopBar";
import ChartsContainer from "./ChartsContainer"
import DietRecipeIndex from "./DietRecipeIndex"
import AuthenticatedRoute from "./authentication/AuthenticatedRoute.js"
import AuthedUserProfile from "./AuthedUserProfile"
import RecipeShow from "./RecipeShow"
import RecipeListPage from "./RecipeListPage"

import IngredientShowPage from "./IngredientShowPage.js"
import IngredientListPage from "./IngredientListPage.js"

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch(err) {
      setCurrentUser(null)
    }
  }
  useEffect(() => {
    fetchCurrentUser()
  }, [])
  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/" component={ChartsContainer} />
        <Route exact path="/diets" component={DietRecipeIndex} />
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
        <AuthenticatedRoute exact={true} path="/authed-profiles" component={AuthedUserProfile} user={currentUser} />  
        <Route exact path="/users/image" component={ChangeUserImage} />
        <Route exact path="/recipes" component={RecipeListPage} />
        <Route exact path="/recipes/:id" component={RecipeShow} />
        <Route exact path="/ingredients" component={IngredientListPage} />
        <Route exact path="/ingredients/:id" component={IngredientShowPage}/>
      </Switch>
    </Router>
  );
};

export default hot(App);
