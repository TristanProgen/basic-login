import React, { Component } from 'react'

export default class LogIn extends Component {
  render() {
    return (
      <div className='logIn'>
        <h3 className='logInTitle'>Log In</h3>
        <div className='logInInput'>
        <input type='text' placeholder='User Name'></input>
        <input type='text' placeholder='User Password'></input>
        <input type='submit' value='Submit'></input>
        </div>
        





      </div>
    )
  }
}
