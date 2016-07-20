import React, { Component } from 'react'


class Danger extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="danger">
        <h1>If you are in danger call <a href="tel:999">999</a> immiediately</h1>
        (this can appear differently depending what country they are viewing from)<br/><br/>
        <ol>
          <li>Head for somewhere where there are other people</li>
          <li>If you have children in danger take them with you</li>
          <li>Ask someone to call 999</li>
          <li>Do not stop to get anything else, the most important thing is for you to leave</li>
        </ol>
      </div>
    )
  }
}

export default Danger;
