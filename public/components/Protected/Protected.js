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

  toggle(e){
    const elem = document.querySelectorAll('.edit-travel-link, .edit-photo-link')
    elem.forEach(elem => elem.classList.remove('active'))
    e.target.classList.add('active')
  }

  render(){
    return(
      <div className='edit'>
        <Redirect from='/protected' exact to='/protected/travel' />
        <div className='link-cont'>
          <Link onClick={(e) => this.toggle(e)} className='edit-travel-link active' to='/protected/travel'> Edit Blog </Link>
          <Link onClick={(e) => this.toggle(e)} className='edit-photo-link' to='/protected/photo'> Edit Photos </Link>
        </div>

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
