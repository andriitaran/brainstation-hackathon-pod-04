import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav className="nav-bar">
        {/* <Link to="/">
          <img className="nav-bar__logo" src={Logo} alt="instock" />
        </Link> */}
        <ul className="nav-bar__list">
          <Link to="/">
            <li className="nav-bar__list--link">Home</li>
          </Link>
          <Link to="/input">
            <li className="nav-bar__list--link">Input</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
