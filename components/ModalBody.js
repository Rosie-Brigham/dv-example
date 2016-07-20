import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Landing from './Landing'
import Menu from './Menu'

class MainBody extends Component {
  constructor(props){
    super(props)
    this.state = {view: 'Landing'}
  }

  handleChange(e) {
    this.setState({view: e.target.id})
  }

  whichView() {
    switch(this.state.view) {
      case 'Landing':
        return <Landing changeView={this.handleChange.bind(this)}/>
        break;
      case 'Menu':
        return <Menu changeView={this.handleChange.bind(this)}/>
        break;
      case 'Danger':
        return <Danger changeView={this.handleChange.bind(this)}/>
        break;
      case 'Leave':
        return <Leave changeView={this.handleChange.bind(this)}/>
        break;
      case 'Legal':
        return <Legal changeView={this.handleChange.bind(this)}/>
        break;
      case 'Online':
        return <Online changeView={this.handleChange.bind(this)}/>
        break;
      case 'Friend':
        return <Friend changeView={this.handleChange.bind(this)}/>
        break;
      default:
        return <Menu changeView={this.handleChange.bind(this)}/>
    }
  }

  render () {
    return (
      <section>
        {this.whichView()}
      </section>
    )
  }
}

export default MainBody;
