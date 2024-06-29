import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <nav className='navBar'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Locations</li>
        </ul>
      </nav>
    )
  }
}
