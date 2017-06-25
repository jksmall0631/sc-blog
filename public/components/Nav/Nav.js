import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/'>.WELCOME.</Link></li>
          <li><Link to='/about'>.ABOUT.</Link></li>
          <li><Link to='/travel'>.TRAVEL.</Link></li>
          <li><Link to='/write'>.WRITE.</Link></li>
          <li><Link to='/photo'>.PHOTOGRAPH.</Link></li>
        </ul>
      </nav>
    )
  }
}
