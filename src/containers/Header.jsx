import React, { Component } from 'react'
import people from '../people.jpg'

class Header extends Component {

  handleLoad = () => {
    const login = document.getElementById('login')
    login.style.top = "5px"
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad())
  }

  render () {
    
    return (
      <div className="header-section">

        <div className="header-section__hero-image">          
          <img src={people} className="header-section__hero-image" alt="people fistbumping"/>
        </div>
          
        <div className="nav-section">
          <nav  className="nav-section__navigation">
          <a href="#" id="login">Login</a>
          {/* <a href="#" className="nav-section__button--projects">Open Projects</a> */}
          <h1 className="nav-section__logo">Build Together</h1>
          <p className="nav-section__dash">_______________</p>
          <h3 className="nav-section__subtitle">build better</h3>
          </nav>
        </div>

      </div>
    )

  }
}

export default Header