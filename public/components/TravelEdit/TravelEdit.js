import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";

import PhotoUpload from "../PhotoUpload/PhotoUpload";
import Travel from "../Travel/Travel";

export default class TravelEdit extends Component {
  constructor() {
    super();
    this.state = {
      blogPhoto: "",
      title: "",
      date: "",
      content: ""
    };
    this.savePhoto = this.savePhoto.bind(this);
  }

  savePhoto(photo) {
    this.setState({ blogPhoto: photo });
  }

  formatDate() {
    const string = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let dateArray = this.state.date.split("-");
    const month = string[dateArray[1] - 1];
    const day = dateArray[2];
    const year = dateArray[0];
    return month + " " + day + ", " + year;
  }

  render() {
    const { blogPhoto, title, date, content } = this.state;
    return (
      <div>
        <div className="edit-blog">
          <h2 className="h2"> Edit Blog</h2>
          <p>Upload Photo:</p>
          <PhotoUpload savePhoto={this.savePhoto} id="file-input" />
          <p>Title:</p>
          <input
            placeholder="title"
            onChange={e => this.setState({ title: e.target.value })}
          />
          <p>Date:</p>
          <input
            className="date"
            type="date"
            placeholder="date"
            onChange={e => this.setState({ date: e.target.value })}
          />
          <p>Content:</p>
          <textarea
            placeholder="content"
            onChange={e => this.setState({ content: e.target.value })}
          />
          <button
            onClick={() =>
              this.props.addEntry(blogPhoto, title, this.formatDate(), content)}
          >
            make that sheeeeiiiitttt!
          </button>
        </div>
        <Travel
          entries={this.props.entries}
          removeEntry={this.props.removeEntry}
        />
      </div>
    );
  }
}
