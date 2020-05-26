import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import logo from "../../Images/Supernova-Gems-black-logo.png";

const authenticatedAdminOptions = (
  <>
    <NavLink className="link navlink5" to="/add-product">
      Add Product
    </NavLink>
    <NavLink className="link navlink6" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);

const authenticatedOptions = (
  <>
    {/* <NavLink className="link navlink5" to="/add-product">
      Add Product
    </NavLink> */}
    <NavLink className="link navlink6" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink className="link navlink5" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="link navlink6" to="/sign-in">
      Sign In
    </NavLink>
  </>
);

const alwaysOptions = (
  <>
    <NavLink className="link navlink1" to="/women">
      Women
    </NavLink>
    <NavLink className="link navlink2" to="/engagement">
      Engagement
    </NavLink>
    <NavLink className="link navlink3" to="/men">
      Men
    </NavLink>
    <NavLink className="link navlink4" to="/lemaison">
      Le Maison
    </NavLink>
  </>
);

const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="nav-navlink" to="/">
          <img className="logo-container" src={logo} />
        </NavLink>
        <div className="links">
          {user && (
            <div className="link welcome navlink0">Welcome, {user.email}</div>
          )}
          {alwaysOptions}
          {user && user.userPermissions === "admin"
            ? authenticatedAdminOptions
            : user
            ? authenticatedOptions
            : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
