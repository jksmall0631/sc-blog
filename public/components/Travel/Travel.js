import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'

require('./Travel.css')

class Travel extends Component {
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
      console.log(entry)
      return (
        <div className='entry' key={entry.id}>
          <img className='entry-photo' src={entry.photo}></img>
          <h1>{entry.title}</h1>
          <p>{entry.date}</p>
          <p>{entry.content}</p>
          {this.props.location.pathname === '/protected' ? <button>remove</button> : ''}
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

export default withRouter(Travel)
