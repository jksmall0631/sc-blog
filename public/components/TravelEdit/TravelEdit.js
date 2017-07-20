import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'

import PhotoUpload from '../PhotoUpload/PhotoUpload'
import Travel from '../Travel/Travel'

// require('./Travel.css')

export default class TravelEdit extends Component {
  render(){
    return(
      <div>
        <div className='edit-blog'>
          <h2 className='h2'> Edit Blog</h2>
          <p>Upload Photo:</p>
          <PhotoUpload savePhoto={this.savePhoto} id='file-input' />
          <p>Title:</p>
          <input placeholder='title' onChange={(e) => this.setState({title: e.target.value})}></input>
          <p>Date:</p>
          <input className='date' type='date' placeholder='date' onChange={(e) => this.setState({date: e.target.value})}></input>
          <p>Content:</p>
          <textarea placeholder='content' onChange={(e) => this.setState({content: e.target.value})}></textarea>
          <button onClick={() => this.props.addEntry(photo, title, this.formatDate(), content)}>make that sheeeeiiiitttt!</button>
        </div>
        <Travel entries={this.props.entries} removeEntry={this.props.removeEntry} />
      </div>
    )
  }
}
