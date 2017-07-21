import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Auth from '../Auth/Auth'

export default class AdminLogin extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false,
    }
    this.redirect = this.redirect.bind(this)
  }

  auth(){
    Auth.authenticate(this.state.username, this.state.password, this.redirect)
  }

  redirect(){
    this.setState({ redirectToReferrer: true })
  }

  render(){
    const { from } = this.props.location.state || { from: { pathname: '/protected' } }
    const { redirectToReferrer } = this.state

    if(redirectToReferrer){
      return (
        <Redirect to={from}/>
      )
    }
    return(
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <input type='text' placeholder='username' onChange={(e) => this.setState({ username: e.target.value })}></input>
        <input type='password' placeholder='password' onChange={(e) => this.setState({ password: e.target.value })}></input>
        <button onClick={() => this.auth()}>submit</button>
      </div>
    )
  }
}
