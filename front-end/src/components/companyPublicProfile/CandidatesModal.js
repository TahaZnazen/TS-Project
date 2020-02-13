import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import React, { Component } from "react";
import "./companyDashboardProfile.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
class CandidatesModal extends Component {
  state = {
    setModal: false
  };
  getID(e) {
    e.target.id && this.props.history.push(`/user/${e.target.id}`);
  }
  toggle() {
    this.setState({ setModal: !this.state.setModal });
  }
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle.bind(this)}>
          {this.buttonLabel}
        </Button>

        {this.state.setModal && (
          <div id="AllModal">
            <div id="modal">
              <ModalHeader toggle={this.toggle.bind(this)}>
                Modal title
              </ModalHeader>
              <ModalBody>
                {this.props.candidates &&
                  this.props.candidates.map(elm => (
                    <h1 onClick={this.getID.bind(this)} id={elm._id}>
                      {elm.name}
                    </h1>
                  ))}
              </ModalBody>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(connect()(CandidatesModal));
