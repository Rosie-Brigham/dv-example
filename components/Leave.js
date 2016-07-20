import React, { Component } from 'react'


class Leave extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="leave">
        <h2>There are a variety of services that offer emergency shelter</h2>
        (We could potentially use geolocation to map out where the nearest shelters are)<br/><br/>
        <ul>
          <li><a href="http://www.refuge.org.uk">refuge.org.uk</a></li>
          <li><a href="https://www.womensaid.org.uk/">womensaid.org.uk/</a></li>
          <li><a href="http://www.mensadviceline.org.uk/mens_advice.php.html">mensadviceline.org.uk</a></li>
        </ul>
      </div>
    )
  }
}

export default Leave;