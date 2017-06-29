import React, {Component} from 'react'

export default class Protected extends Component {
  constructor(){
    super()
    this.state = {
      title: '',
      date: '',
      body: '',
    }
  }

  save(){
    console.log('bla')
  }

  render(){
    return(
      <div>
        <h1>PROTECTEEEEEED!</h1>
        <input placeholder='title' onChange={(e) => this.setState({title: e.target.value})}></input>
        <input type='date' placeholder='date' onChange={(e) => this.setState({date: e.target.value})}></input>
        <textarea placeholder='body' onChange={(e) => this.setState({body: e.target.value})}></textarea>
        <button onClick={() => this.save}>make that sheeeeiiiitttt!</button>
      </div>
    )
  }
}
