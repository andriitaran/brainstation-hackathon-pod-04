import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/Group8.svg";

export default class Header extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <Link to="/">
          <img className="nav-bar__logo" src={Logo} alt="ON" />
        </Link>
        <ul className="nav-bar__list">
          <Link to="/">
            <li className="nav-bar__list--link">My Postings</li>
          </Link>
          <Link to="/">
            <li className="nav-bar__list--link">Explore</li>
          </Link>
          <Link to="/">
            <li className="nav-bar__list--link">Support</li>
          </Link>
          <Link to="/">
            <li className="nav-bar__list--link">Contact</li>
          </Link>
          <Link to="/">
            <li className="nav-bar__list--link login">LOGIN</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
