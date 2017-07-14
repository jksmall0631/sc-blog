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

  formatDate(){
    const string = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let dateArray = this.state.date.split('-')
    const month = string[dateArray[1] - 1]
    const day = dateArray[2]
    const year = dateArray[0]
    return month + ' ' + day + ', ' + year
  }

  render(){
    const { photo, title, date, content } = this.state
    return(
      <div className='edit'>
        <div className='edit-blog'>
          <h2 className='h2'> Edit Blog</h2>
          <p>Upload Photo:</p>
          <PhotoUpload savePhoto={this.savePhoto} id='file-input' />
          <p>Title:</p>
          <input placeholder='title' onChange={(e) => this.setState({title: e.target.value})}></input>
          <p>Date:</p>
          <input type='date' placeholder='date' onChange={(e) => this.setState({date: e.target.value})}></input>
          <p>Content:</p>
          <textarea placeholder='content' onChange={(e) => this.setState({content: e.target.value})}></textarea>
          <button onClick={() => this.props.addEntry(photo, title, this.formatDate(), content)}>make that sheeeeiiiitttt!</button>
        </div>
        <Travel entries={this.props.entries} removeEntry={this.props.removeEntry} />
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
