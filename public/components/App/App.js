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
    }
  }

  componentDidMount(){
    this.blogEntries()
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
    .then(data => console.log(data))
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
      let array = this.state.entries
      for(let i = 0; i < array.length; i++){
        if(array[i].id === id){
          array.splice(i, 1)
        }
      }
      this.setState({entries: array})
    })
    .catch(err => alert(err))
  }

  render() {
    return (
      <main>
        <Nav />
        <Route exact path='/' component={Welcome}/>
        <Route path='/about' component={About}/>
        <Route path='/travel' render={() => (
          <Travel entries={this.state.entries} removeEntry={this.removeEntry} component={Travel} />
        )} />
        <Route path='/write' component={Write}/>
        <Route path='/photo' component={Photo}/>
        <Route exact path='/admin' component={AdminLogin}/>
        <PrivateRoute path='/protected' entries={this.state.entries} component={Protected}/>
      </main>
    )
  }
}


// addEntry={this.addEntry} component={Protected} entries={this.state.entries}/>
