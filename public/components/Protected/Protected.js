import React, {Component} from 'react'

export default class Protected extends Component {
  render(){
    return(
      <h1>PROTECTEEEEEED!</h1>
      <input placeholder='title'></input>
      <input type='date' placeholder='date'></input>
      <textarea placeholder='body'></textarea>
      <button>make that sheeeeiiiitttt!</button>
    )
  }
}
