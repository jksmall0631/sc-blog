import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

require("./About.css");

export default class About extends Component {
  render() {
    return (
      <div>
        <h1 className="title">About</h1>
        <h4 className="coming">Coming Soon</h4>
      </div>
    )
  }
}
