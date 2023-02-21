import React from "react"
import { Redirect, Route } from "react-router-dom"

const AuthenticationCheck = ({ component: Component, user }) => {
  if (user !== null) {
    return <Component />
  }
  return <Redirect to="/user-sessions/new" />
};

const AuthenticatedRoute = ({ component, user, ...rest }) => {
  return (
    <Route {...rest}>
      <AuthenticationCheck user={user} component={component} />
    </Route>
  )
}

export default AuthenticatedRoute
