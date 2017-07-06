import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Photo extends Component {
  render(){
    return(
      <h1>
        {console.log(this.props.photos)}
      </h1>
    )
  }
}
