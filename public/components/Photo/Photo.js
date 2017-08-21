import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Masonry from "react-masonry-component";

require("./Photo.css");

const masonryOptions = {
  gutter: 20,
  fitWidth: true,
};

class Photo extends Component {
  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  render() {
    let photos = this.props ? this.props.photos : [];
    const shuffled = this.shuffleArray(photos);
    let formatted = shuffled.map(photo => {
      return (
        <div className="photo-cont" key={photo.id}>
          <img className="photo" src={photo.photo} />
          {this.props.location.pathname === "/protected/photo"
            ? <button
                className="photo-del"
                onClick={() => {
                  this.props.removePhoto(photo.id);
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
        <h1 className="title">Photograph</h1>
        <Masonry
          className={"my-gallery-class"}
          elementType={"ul"}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >
          {formatted}
        </Masonry>
      </div>
    );
  }
}

export default withRouter(Photo);
