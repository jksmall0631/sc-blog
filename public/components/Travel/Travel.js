import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Travel extends Component {
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
    .then(data => this.setState({entries: data}))
  }

  displayEntries(){
    let entries = this.state.entries.map(entry => {
      return (
        <div className='entry' key={entry.id}>
          <h1>{entry.title}</h1>
          <p>{entry.date}</p>
          <p>{entry.content}</p>
        </div>
      )
    })
    return entries
  }

  render(){
    return(
      <div>
        {this.displayEntries()}
      </div>
    )
  }
}
