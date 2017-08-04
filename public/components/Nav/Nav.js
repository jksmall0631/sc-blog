import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

require("./Nav.css");

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link className="nav" to="/">
              . &nbsp;&nbsp; WELCOME &nbsp;&nbsp; .
            </Link>
          </li>
          <li>
            <Link className="nav" to="/about">
              . &nbsp;&nbsp; ABOUT &nbsp;&nbsp; .
            </Link>
          </li>
          <li>
            <Link className="nav" to="/travel">
              . &nbsp;&nbsp; TRAVEL &nbsp;&nbsp; .
            </Link>
          </li>
          <li>
            <a
              className="nav"
              href="https://theprose.com/clearly"
              target="_blank"
            >
              . &nbsp;&nbsp; WRITE &nbsp;&nbsp; .
            </a>
          </li>
          <li>
            <Link className="nav" to="/photo">
              . &nbsp;&nbsp; PHOTOGRAPH &nbsp;&nbsp; .
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
