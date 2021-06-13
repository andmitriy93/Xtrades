import React from 'react'
import Sidebar from '../sidebar/sidebar'
import Navbar from '../navbar/navbar'
import Content from '../content/content'
import './dashboard.css'

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard__outter">
        <Sidebar />
        <Navbar />
        <Content />
      </div>
    )
  }
}

export default Dashboard