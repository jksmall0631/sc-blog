import React, {Component} from 'react'

export default class AdminLogin extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false,
    }
  }

  auth(){
    const url = 'http://localhost:3000/auth'
    fetch(url, {
      method: POST,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({username: this.state.username, password: this.state.password}),
    }).then(data => data.json())
      .then(data => {
        if (data.message) {
          alert(data.message)
        } else {
          this.setState({redirectToReferrer: true})
        }
      })
      .catch(err => alert('Email and Password do not match'))
  }

  render(){
    return(
      <div>
        <h4>Hey Sharon,</h4>
        <input type='text' placeholder='username' onChange={(e) => this.setState({ username: e.target.value })}></input>
        <input type='text' placeholder='password' onChange={(e) => this.setState({ password: e.target.value })}></input>
        <button onClick={() => this.auth()}>submit</button>
      </div>
    )
  }
}
