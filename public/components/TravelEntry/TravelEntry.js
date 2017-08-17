import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
  Redirect
} from "react-router-dom";

require("../Travel/Travel.css");

class TravelEntry extends Component {
  render() {
    if(!this.props.entry) {
      return (
        <Redirect from="/travel-entry" exact to="/travel" />
      )
    }

    let entry = this.props.entry
      return (
        <div className="entry" key={entry.id}>
          <img className="entry-photo" src={entry.photo} />
          <div id="pdfRenderer" />
          <h1 className="entry-title">
            {entry.title}
          </h1>
          <p className="entry-date">
            {entry.date}
          </p>
          <pre className="entry-content">
            {entry.content}
          </pre>
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

    return (
      <div>
        {formatted}
      </div>
    );
  }
}

export default withRouter(TravelEntry);
