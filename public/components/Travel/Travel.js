import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import TravelEntry from "../TravelEntry/TravelEntry";

require("./Travel.css");

class Travel extends Component {
  render() {
    let entries = this.props ? this.props.entries : [];
    let formatted = entries.map(entry => {
      let formattedContent = entry.content.substr(0, 400);
      formattedContent =
        entry.content.substr(
          0,
          Math.min(formattedContent.length, formattedContent.lastIndexOf(" "))
        ) + "...";

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
            {formattedContent}
          </pre>
          <br />
          <Link
            to="/travel-entry"
            onClick={() => this.props.select(entry)}
            className="read-more"
          >
            read more >
          </Link>
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
        <h1 className="title">Travel</h1>
        {formatted}
      </div>
    );
  }
}

export default withRouter(Travel);
