import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { hot } from "react-hot-loader/root"

import getCurrentUser from "../services/getCurrentUser"
import "../assets/scss/main.scss"
import RegistrationForm from "./registration/RegistrationForm"
import SignInForm from "./authentication/SignInForm"
import UserProfile from "./UserProfile.js"

import AuthenticatedRoute from "./authentication/AuthenticatedRoute.js"
import TopBar from "./layout/TopBar";
import ChartsContainer from "./ChartsContainer"
import DietRecipeIndex from "./DietRecipeIndex"

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
        <AuthenticationRoute exact path="/profile" component={UserProfile} user={currentUser} />  
      </Switch>
    </Router>
  );
};

export default hot(App);
