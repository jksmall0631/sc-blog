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

require('./Reset.css')
require('./App.css')


export default class App extends Component {
  render() {
    return (
      <main>
        <Nav />
        <div className='banner'>
          <div className='name-cont'>
            <h1 className='name'>SHARON</h1>
            <h1 className='name'>CLEERE</h1>
          </div>
          <h2 className='motto'>CREATIVE IMAGERY THROUGH WORDS AND PHOTOS</h2>
        </div>
        <Route exact path='/' component={Welcome}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/travel' component={Travel}/>
        <Route exact path='/write' component={Write}/>
        <Route exact path='/photo' component={Photo}/>
      </main>
    )
  }
}
