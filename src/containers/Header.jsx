import React, { Component } from 'react'
import people from '../people.jpg'

class Header extends Component {

  render () {
    
    return (
      <div className="header-section">

        <div className="header-section__image-container">
        <img src={people} className="header-section__hero-image" alt="people fistbumping"/>
          
        </div>

        <div className="nav-section">
          <h1 className="nav-section__logo">Build Together</h1>
          <nav  className="nav-section__navigation">
            <button>Login</button>
            <button>Signup</button>
          </nav>
        </div>

      </div>
    )

  }
}

export default Header