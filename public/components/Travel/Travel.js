import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";

require("./Travel.css");

class Travel extends Component {
  render() {
    let entries = this.props ? this.props.entries : [];
    let formatted = entries.map(entry => {
      return (
        <div className="entry" key={entry.id}>
          <img className="entry-photo" src={entry.photo} />
          <h1 className="entry-title">
            {entry.title}
          </h1>
          <p className="entry-date">
            {entry.date}
          </p>
          <p className="entry-content">
            {entry.content}
          </p>
          {this.props.location.pathname === "/protected/travel"
            ? <button
                className="entry-btn"
                onClick={() => {
                  this.props.removeEntry(entry.id);
                }}
              >
                remove
              </button>
            : ""}
        </div>
      );
    });
    return (
      <div>
        {formatted}
      </div>
    );
  }
}

export default withRouter(Travel);
