import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class Landing extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section id="intro">
        <p>
        This is an untraceable embedded website to help victims of domestic violence.
        <br/>
        This website won’t appear in your browser’s history.
        </p>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.props.enter}
        >
          Enter
        </Button>
      </section>
    )
  }
}

export default Landing;
