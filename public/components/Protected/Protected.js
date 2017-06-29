import React, {Component} from 'react'

export default class Protected extends Component {
  constructor(){
    super()
    this.state = {
      title: '',
      date: '',
      content: '',
    }
  }

  save(){
    const url = 'http://localhost:3000/api/v1/blog'
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title: this.state.title, date: this.state.date, content: this.state.content})
    })
    .then(data => data.json())
    .then(data => console.log(data))
  }

  render(){
    return(
      <div>
        <h1>PROTECTEEEEEED!</h1>
        <input placeholder='title' onChange={(e) => this.setState({title: e.target.value})}></input>
        <input type='date' placeholder='date' onChange={(e) => this.setState({date: e.target.value})}></input>
        <textarea placeholder='content' onChange={(e) => this.setState({content: e.target.value})}></textarea>
        <button onClick={() => this.save()}>make that sheeeeiiiitttt!</button>
      </div>
    )
  }
}
