import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Banner from '../Banner/Banner'

export default class Welcome extends Component {
  render(){
    return(
      <Banner />
    )
  }
}
