import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'

require('./Photo.css')

class Photo extends Component {
  render(){
    let photos = this.props ? this.props.photos : []
    console.log(photos)
    let formatted = photos.map(photo => {
      return (
        <div className='photo-cont' key={photo.id}>
          <img className='photo' src={photo.photo}></img>
          {this.props.location.pathname === '/protected/photo' ? <button className='photo-del' onClick={() => {this.props.removePhoto(photo.id)}}>remove</button> : ''}
        </div>
      )
    })
    return(
      <div>
        {formatted}
      </div>
    )
  }
}

export default withRouter(Photo)
