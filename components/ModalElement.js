import React, {Component} from 'react'
import { Button, Modal } from 'react-bootstrap';
import MainBody from './ModalBody'

class ModalElement extends Component {
  constructor(props){
    super(props)
    this.state = {showModal: false}
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  wip() {
    alert("oops, this doesn't work yet!")
  }


  render() {
    return (
      <div>
        <img id="damm-logo" src="https://cdn-images-1.medium.com/fit/c/100/100/1*77RVJc1DowJeKFcmCegmQg.png"
          onClick={this.open.bind(this)}
          />

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <img id="back-button" src="http://downloadicons.net/sites/default/files/returns--button-icon-51007.png" onClick={this.wip}/>
            <Modal.Title>Untraceable Help</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <MainBody/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default ModalElement;