import React from "react"
import { Link } from "react-router-dom"
import SignOutButton from "../authentication/SignOutButton"
import UserProfileImage from "../UserProfileImage"

const TopBar = ({ user }) => {
  const unauthenticatedListItems = [
    <li key="sign-in">
      <Link to="/user-sessions/new">Sign In</Link>
    </li>,
    <li key="sign-up">
      <Link to="/users/new" className="button">
        Sign Up
      </Link>
    </li>,
  ]

  const authenticatedListItems = [
    <li key="user-img" className="top-bar-margin">
      <UserProfileImage />
    </li>,
    <li key="sign-out" className="sign-out-button">
      <SignOutButton />
    </li>,
  ]

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <div className="home-bar">
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/diets">Our Product</Link>
            </li>
            <li>
              <Link to="/search">Project</Link>
            </li>
            <li key="change-image" className="top-bar-margin">
              <Link to="/users/image">Change User Image</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="searchBar">
          <form  className="searchForm">
              <input type='search' name='find' id='find' placeholder="Search query" />
              <input type="submit" value="Search"></input>
          </form>
        </div>
      <div className="top-bar-right">
        <ul className="menu">{user ? authenticatedListItems : unauthenticatedListItems}</ul>
      </div>
    </div>
  )
}

export default TopBar
