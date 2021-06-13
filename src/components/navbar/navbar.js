import React from 'react'
import './navbar.css'

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <span className="navbar__text">Alerts</span>
        <input type="text" className="navbar__search" placeholder="Search for ticket, user, or other information" />

        <button>+ Invite a friend</button>

        {/* <div className="navbar__icons"> */}
          <i className="navbar__icons fas fa-bell"></i>
          <i className="navbar__icons fas fa-comment-alt"></i>
          <i className="navbar__icons fas fa-cog"></i>
          <i className="navbar__icons fas fa-user"></i>
        {/* </div> */}
      </div>
    )
  }
}

export default Navbar