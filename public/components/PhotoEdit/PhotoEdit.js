import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'

import PhotoUpload from '../PhotoUpload/PhotoUpload'
import Photo from '../Photo/Photo'

export default class TravelEdit extends Component {
  constructor(){
    super()
    this.state = {
      photo: '',
    }
  }

  render(){
    const { blogPhoto, title, date, content } = this.state
    return(
      <div>
        <div className='edit-photos'>
          <h2 className='h2'>Edit Photos</h2>
          <p>Upload Photo:</p>
          <PhotoUpload savePhoto={this.props.savePhoto} id='file-input2' />
        </div>
        <Photo photos={this.props.photos} removePhoto={this.props.removePhoto} />
      </div>
    )
  }
}
