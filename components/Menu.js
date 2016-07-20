import React, { Component } from 'react'

class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id="menu">
        <section id="Danger" onClick={this.props.changeView}>
          <div id="Danger" className="logo-placholder"></div>
          In Danger
        </section>
        <section id="Leave" onClick={this.props.changeView}>
          <div id="Leave" className="logo-placholder"></div>
          Find shelter
        </section>
        <section id="Legal" onClick={this.props.changeView}>
          <div id="Legal" className="logo-placholder"></div>
          Build a legal case
        </section>
        <section id="Friend" onClick={this.props.changeView}>
          <div id="Friend" className="logo-placholder"></div>
          A friend is in danger
        </section>
        <section id="Leave" onClick={this.props.changeView}>
          <div id="Leave" className="logo-placholder"></div>
          Online Safety
        </section>
      </div>
      )
  }
}

export default Menu;
