import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import PhotoUpload from '../PhotoUpload/PhotoUpload'
import Travel from '../Travel/Travel'
import Photo from '../Photo/Photo'

require('./Protected.css')

export default class Protected extends Component {
  constructor(){
    super()
    this.state = {
      blogPhoto: '',
      title: '',
      date: '',
      content: '',
      photo: '',
    }
    this.savePhoto = this.savePhoto.bind(this)
  }

  savePhoto(photo){
    this.setState({photo: photo})
  }

  render(){
    const { photo, title, date, content } = this.state
    return(
      <div>
        <div className='edit-blog'>
          <PhotoUpload savePhoto={this.savePhoto} id='file-input' />
          <input placeholder='title' onChange={(e) => this.setState({title: e.target.value})}></input>
          <input type='date' placeholder='date' onChange={(e) => this.setState({date: e.target.value})}></input>
          <textarea placeholder='content' onChange={(e) => this.setState({content: e.target.value})}></textarea>
          <button onClick={() => this.props.addEntry(photo, title, date, content)}>make that sheeeeiiiitttt!</button>
        </div>
        <Travel entries={this.props.entries} removeEntry={this.props.removeEntry} />
        <PhotoUpload savePhoto={this.props.savePhoto} id='file-input2' />
        <Photo photos={this.props.photos} removePhoto={this.props.removePhoto} />
      </div>
    )
  }
}
