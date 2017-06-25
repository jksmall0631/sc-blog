import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Nav />
      <h1>SHARON CLEERE</h1>
      <h2>CREATIVE IMAGERY THROUGH WORDS AND PHOTOS<h2>
      <Route exact path='/' component={Welcome}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/travel' component={Travel}/>
      <Route exact path='/write' component={Write}/>
      <Route exact path='/photo' component={Photo}/>
    )
  }
}
