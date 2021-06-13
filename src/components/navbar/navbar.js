import React from 'react'
import './navbar.css'

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <span>Alerts</span>
        <input type="text" className="navbar__search" placeholder="Search for ticket, user, or other information" />

        <button>+ Invite a friend</button>

        <div className="navbar__icons">
          <i className="fas fa-bell"></i>
          <i className="fas fa-comment-alt"></i>
          <i className="fas fa-cog"></i>
          <i className="fas fa-user"></i>
        </div>
      </div>
    )
  }
}

export default Navbar