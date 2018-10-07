import React, { Component } from 'react';
import people from '../people.jpg';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class Header extends Component {

  componentDidMount() {
    // window.addEventListener('load', this.handleLoad())
  }

  render () {
    
    return (
      <div className="header-section">

        <div className="header-section__hero-image">          
          <img src={people} className="header-section__hero-image" alt="people fistbumping"/>
        </div>
          
        <div className="nav-section">
          <nav  className="nav-section__navigation">
            
            <h1 className="nav-section__logo">Build Together</h1>
            <p className="nav-section__dash">_______________</p>
            <h3 className="nav-section__subtitle">build better</h3>

            <NavLink className="nav-section__button--projects" to="/projects" exact>Open Projects</NavLink>
            <ul>  
            
              <li className="nav-section__list">
                <NavLink className="nav-section__links" to="/" exact>Home</NavLink>
              </li>
              <li className="nav-section__list">
                <NavLink className="nav-section__links" to="/login" exact>Login</NavLink>
              </li>
              <li className="nav-section__list">
                <NavLink className="nav-section__links" to="/signup" exact>Signup</NavLink>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    )

  }
}

export default Header