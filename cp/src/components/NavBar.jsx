import React from "react";
import styles from "../css/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return     <nav>
  <ul>
    <li>
      <NavLink to="/chat">CHAT</NavLink>
    </li>
    <li>
      <NavLink to="/profile">PROFILE</NavLink>
    </li>
    <li>
      <NavLink to="/marketplace">MARKETPLACE</NavLink>
    </li>
    <li>
      <NavLink to="/">HOME</NavLink>
    </li>
    <li>
    </li>
  </ul>
</nav>
};

export default NavBar;
