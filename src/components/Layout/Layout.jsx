import React from "react";
import { Link, NavLink } from "react-router-dom";
const Layout = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/routing">
        Routing
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink to="/users" className="nav-link">
            Users
          </NavLink>
          <NavLink to="/courses" className="nav-link">
            Courses
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Layout;
