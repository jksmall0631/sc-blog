import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'

require('./Travel.css')

class Travel extends Component {
  render(){
    let entries = this.props ? this.props.entries : []
    let formatted = entries.map(entry => {
      return (
        <div className='entry' key={entry.id}>
          <img className='entry-photo' src={entry.photo}></img>
          <h1>{entry.title}</h1>
          <p>{entry.date}</p>
          <p>{entry.content}</p>
          {this.props.location.pathname === '/protected' ? <button onClick={() => {this.props.removeEntry(entry.id)}}>remove</button> : ''}
        </div>
      )
    })
    return(
      <div>
        {formatted}
      </div>
    )
  }
}

export default withRouter(Travel)
