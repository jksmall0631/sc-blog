import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Photo extends Component {
  render(){
    let photos = this.props ? this.props.photos : []
    let formatted = photos.map(photo => {
      return (
        <div className='photo-cont' key={photo.id}>
          <img className='photo' src={photo.photo}></img>
          {this.props.location.pathname === '/protected' ? <button onClick={() => {this.props.removePhoto(photo.id)}}>remove</button> : ''}
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
