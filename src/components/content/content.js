import React from 'react'
import Tickets from '../tickets/tickets'
import './content.css'

class Content extends React.Component {

  render() {
    return (
      <div className="content">
        <Tickets />
        <h2>content</h2>
      </div>
    )
  }
}

export default Content