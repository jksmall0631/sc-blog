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
      photo: '',
      title: '',
      date: '',
      content: '',
    }
    this.savePhoto = this.savePhoto.bind(this)
  }

  save(){
    const url = 'http://localhost:3000/api/v1/blog'
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({photo: this.state.photo, title: this.state.title, date: this.state.date, content: this.state.content})
    })
    .then(data => data.json())
    .then(data => console.log(data))
  }

  savePhoto(photo){
    console.log(photo)
    this.setState({photo: photo})
  }

  render(){
    return(
      <div>
        <Travel />
        <h1>PROTECTEEEEEED!</h1>
        <PhotoUpload savePhoto={this.savePhoto}/>
        <input placeholder='title' onChange={(e) => this.setState({title: e.target.value})}></input>
        <input type='date' placeholder='date' onChange={(e) => this.setState({date: e.target.value})}></input>
        <textarea placeholder='content' onChange={(e) => this.setState({content: e.target.value})}></textarea>
        <button onClick={() => this.save()}>make that sheeeeiiiitttt!</button>
      </div>
    )
  }
}
