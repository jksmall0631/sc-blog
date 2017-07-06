import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import PhotoUpload from '../PhotoUpload/PhotoUpload'
import Travel from '../Travel/Travel'

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
        <h1>PROTECTEEEEEED!</h1>
        <PhotoUpload savePhoto={this.savePhoto} id='file-input'/>
        <input placeholder='title' onChange={(e) => this.setState({title: e.target.value})}></input>
        <input type='date' placeholder='date' onChange={(e) => this.setState({date: e.target.value})}></input>
        <textarea placeholder='content' onChange={(e) => this.setState({content: e.target.value})}></textarea>
        <button onClick={() => this.props.addEntry(photo, title, date, content)}>make that sheeeeiiiitttt!</button>
        <Travel entries={this.props.entries} removeEntry={this.props.removeEntry}/>
        <PhotoUpload savePhoto={this.props.savePhoto} id='file-input2'/>
      </div>
    )
  }
}
