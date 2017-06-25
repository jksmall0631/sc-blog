import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Nav from '../Nav/Nav'
import Welcome from '../Welcome/Welcome'
import About from '../About/About'
import Travel from '../Travel/Travel'
import Write from '../Write/Write'
import Photo from '../Photo/Photo'


export default class App extends Component {
  render() {
    return (
      <main>
        <Nav />
        <h1>SHARON CLEERE</h1>
        <h2>CREATIVE IMAGERY THROUGH WORDS AND PHOTOS</h2>
        <Route exact path='/' component={Welcome}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/travel' component={Travel}/>
        <Route exact path='/write' component={Write}/>
        <Route exact path='/photo' component={Photo}/>
      </main>
    )
  }
}
