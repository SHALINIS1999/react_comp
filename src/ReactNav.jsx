import React from "react";
import "./reactnav.css";

function ReactNav() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyWebsite</h2>

      <ul className="nav-links">
        <li>Home</li>
        <li>Movie</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default ReactNav;