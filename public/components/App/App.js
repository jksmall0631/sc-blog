import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import Nav from '../Nav/Nav'
import Welcome from '../Welcome/Welcome'
import About from '../About/About'
import Travel from '../Travel/Travel'
import Write from '../Write/Write'
import Photo from '../Photo/Photo'
import AdminLogin from '../AdminLogin/AdminLogin'
import Protected from '../Protected/Protected'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

require('./Reset.css')
require('./App.css')


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      entries: [],
      photos: [],
    }
    this.addEntry = this.addEntry.bind(this)
    this.removeEntry = this.removeEntry.bind(this)
    this.savePhoto = this.savePhoto.bind(this)
  }

  componentDidMount(){
    this.blogEntries()
    this.photos()
  }

  blogEntries(){
    const url = 'http://localhost:3000/api/v1/blog'
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(data => data.json())
    .then(data => {
      this.setState({entries: data})})
    .catch(err => alert(err))
  }

  addEntry(photo, title, date, content){
    const url = 'http://localhost:3000/api/v1/blog'
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({photo, title, date, content})
    })
    .then(data => data.json())
    .then(data => {
      let entries = this.state.entries
      entries.push(data[0])
      this.setState({entries})
    })
    .catch(err => alert(err))
  }

  removeEntry(id){
    const url = 'http://localhost:3000/api/v1/delete'
    fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ id })
    })
    .then(data => data.json())
    .then(data => {
      let array = this.state ? this.state.entries : []
      for(let i = 0; i < array.length; i++){
        if(array[i].id === id){
          array.splice(i, 1)
        }
      }
      this.setState({entries: array})
    })
    .catch(err => console.log(err))
  }

  photos(){

  }

  savePhoto(photo){
    let photoArray = this.state.photos
    photoArray.push(photo)
    this.setState({photos: photoArray})
  }

  render() {
    return (
      <main>
        <Nav />
        <Route exact path='/' component={Welcome} />
        <Route path='/about' component={About} />
        <Route path='/travel' render={() => (
          <Travel entries={this.state.entries} component={Travel} />
        )} />
        <Route path='/write' component={Write} />
        <Route path='/photo' render={() => (
          <Photo photos={this.state.photos} component={Photo} />
        )} />
        <Route exact path='/admin' component={AdminLogin} />
        <PrivateRoute
          path='/protected'
          entries={this.state.entries}
          addEntry={this.addEntry}
          removeEntry={this.removeEntry}
          savePhoto={this.savePhoto}
          component={Protected} />
      </main>
    )
  }
}


// addEntry={this.addEntry} component={Protected} entries={this.state.entries}/>
