import React, { Component } from 'react'
import people from '../people.jpg'

class Header extends Component {

  render () {
    
    return (
      <div className="header-section">

        <div className="header-section__hero-image">          
          <img src={people} className="header-section__hero-image" alt="people fistbumping"/>
        </div>
          
        <div className="nav-section">
          <nav  className="nav-section__navigation">
          <h1 className="nav-section__logo">Build Together</h1>
              <a href="#" className="nav-section__button--projects">Open Projects</a>
          </nav>
        </div>

      </div>
    )

  }
}

export default Header