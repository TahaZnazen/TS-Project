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
        <Button color="transparent" onClick={this.toggle.bind(this)}>
          Show Candidates
        </Button>

        {this.state.setModal && (
          <div id="AllModal">
            <div id="modal">
              <ModalHeader
                style={{ color: "black" }}
                toggle={this.toggle.bind(this)}
              >
                Candidates
              </ModalHeader>
              <ModalBody>
                {this.props.candidates &&
                  this.props.candidates.map(elm => (
                    <h1
                      style={{ color: "black" }}
                      onClick={this.getID.bind(this)}
                      id={elm._id}
                    >
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
