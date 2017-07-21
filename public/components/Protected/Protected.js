import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import PhotoUpload from '../PhotoUpload/PhotoUpload'
import TravelEdit from '../TravelEdit/TravelEdit'
import PhotoEdit from '../PhotoEdit/PhotoEdit'

require('./Protected.css')

export default class Protected extends Component {

  render(){
    return(
      <div className='edit'>
        <Redirect from='/protected' exact to='/protected/travel' />
        <Link className='edit-travel-btn' to='/protected/travel'> Edit Travel Blog </Link>
        <Link className='edit-photo-btn' to='/protected/photo'> Edit Photos </Link>

        <Route path='/protected/travel' render={() => (
          <TravelEdit
            entries={this.props.entries}
            addEntry={this.props.addEntry}
            removeEntry={this.props.removeEntry} />
          )} />
        <Route path='/protected/photo' render={() => (
          <PhotoEdit
            photos={this.props.photos}
            savePhoto={this.props.savePhoto}
            removePhoto={this.props.removePhoto} />
          )} />

      </div>
    )
  }
}
