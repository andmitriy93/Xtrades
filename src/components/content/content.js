import React from 'react'
import Tickets from '../tickets/tickets'
import RecentActivity from '../recentActivity/recentActivity'
import './content.css'

class Content extends React.Component {

  render() {
    return (
      <div className="content">
        <Tickets />
        <RecentActivity />
      </div>
    )
  }
}

export default Content