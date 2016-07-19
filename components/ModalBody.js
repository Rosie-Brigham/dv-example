import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Landing from './Landing'
import Menu from './Menu'

class MainBody extends Component {
  constructor(props){
    super(props)
    this.state = {view: 'landing'}
  }

  handleChange() {
    this.setState({view: 'menu'})
  }

  render () {
    return (
      <section>
        {this.state.view == 'landing' ? <Landing enter={this.enter.bind(this)}/> : <Menu enter={this.enter.bind(this)}/> }
      </section>
    )
  }
}

export default MainBody;
