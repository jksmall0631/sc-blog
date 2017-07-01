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
    .catch(err => alert(err))
  }

  removeEntry(id){
    const url = 'http://localhost:3000/api/v1/delete'
    fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ id })
    })
    .then(data => data.json())
    .then(data => {
      let array = this.state.entries
      for(let i = 0; i < array.length; i++){
        if(array[i].id === id){
          array.splice(i, 1)
        }
      }
    })
    .catch(err => alert(err))
  }

  displayEntries(){
    let entries = this.state.entries.map(entry => {
      return (
        <div className='entry' key={entry.id}>
          <img className='entry-photo' src={entry.photo}></img>
          <h1>{entry.title}</h1>
          <p>{entry.date}</p>
          <p>{entry.content}</p>
          {this.props.location.pathname === '/protected' ? <button onClick={() => {this.removeEntry(entry.id)}}>remove</button> : ''}
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
