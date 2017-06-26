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

require('./Reset.css')
require('./App.css')


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

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
