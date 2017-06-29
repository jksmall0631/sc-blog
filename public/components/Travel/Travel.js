import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Travel extends Component {
  blogEntries(){
    const url = 'http://localhost:3000/api/v1/blog'
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    // .then(data => data.json())
    .then(data => console.log(data))
  }

  render(){
    return(
      <div>
        {this.blogEntries()}
      </div>
    )
  }
}
