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
  render() {
    return (
      <main>
        <Nav />
        <Route exact path='/' component={Welcome}/>
        <Route path='/about' component={About}/>
        <Route path='/travel' component={Travel}/>
        <Route path='/write' component={Write}/>
        <Route path='/photo' component={Photo}/>
        <Route exact path='/admin' component={AdminLogin}/>
        <PrivateRoute path="/protected" component={Protected}/>
      </main>
    )
  }
}
