import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
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
