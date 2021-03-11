import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

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
  ];

  const authenticatedListItems = [
    <li key="sign-out">
      <SignOutButton />
    </li>,
  ];

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li>
            <Link className="menu-text" to="/">Bowst</Link>
          </li>
          <li>
            <Link className="links" to="/services">Services</Link>
          </li>
          <li>
            <Link className="links" to="/clients">Clients</Link>
          </li>
          <li>
            <Link className="links" to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link className="links" to="/resources">Resources</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
