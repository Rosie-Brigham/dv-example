import React, { Component } from 'react'

class Menu extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  thing() {
    this.foo = 'foo'
    this.props.enter()
  }

  render() {
    return(
      <p id="menu">
        <section onClick={this.foo}>
          <div className="logo-placholder"></div>
          In Danger
        </section>
        <section>
          <div className="logo-placholder"></div>
          Getting Help
        </section>
        <section>
          <div className="logo-placholder"></div>
          Build a legal case
        </section>
        <section>
          <div className="logo-placholder"></div>
          A friend is in danger
        </section>
        <section id="last">
          <div className="logo-placholder"></div>
          Online Safety
        </section>
      </p>
      )
  }
}

export default Menu;
