import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions'
import { NavLink } from 'react-router-dom';

class Logout extends Component {

  handleLogout = (event) => {
    event.preventDefault()

    this.props.logout(this.props.history)
    
  }

  render() {
    return (
      <button className="nav-section__links nav-section__links--logout" onClick={(event) => this.handleLogout(event)}>Logout</button>
    )
  }

}

export default connect(null, {logout})(Logout);