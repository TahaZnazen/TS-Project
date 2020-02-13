import React, { Component } from "react";
import {
  companyDashboard,
  acceptCondidate,
  rejectCondidate
} from "../../../actions/offersAction";

import { connect } from "react-redux";
import { Table } from "reactstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  FormGroup,
  Col,
  Label,
  Input
} from "reactstrap";

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobOffers: [],
      modalAccept: false,
      modalReject: false
    };
  }
  toggleModalAccept(e) {
    this.setState({
      modalAccept: !this.state.modalAccept
    });
  }
  toggleModalReject(e) {
    this.setState({
      modalReject: !this.state.modalReject
    });
  }

  componentDidMount() {
    let token = this.props.authInfo.token;
    axios
      .post("http://localhost:8080/api/users/generateID", { token: token })
      //invoke he function that will get the posts for this company
      .then(res => {
        this.props.companyDashboard(res.data.id);
      })

      .catch(err => console.log(err));
  }

  goProfile(e) {
    this.props.history.push(`/user/${e.target.attributes.candidateId.value}`);
  }
  handelAcceptRequest = e => {
    e.preventDefault();
    const { userId, companyId, jobId } = this.state;
    let date = e.target.date.value;
    let message = e.target.message.value;
    this.props.acceptCondidate(userId, companyId, jobId, date, message);
    this.toggleModalAccept();
    // you can add new color if the condidate accepted
  };
  handelRejectRequest = e => {
    e.preventDefault();
    const { userId, companyId, jobId } = this.state;
    let message = e.target.message.value;
    this.props.rejectCondidate(userId, companyId, jobId, message);
    this.toggleModalReject();

    //you can add new color if the condidate rejected
  };
  onAccept = e => {
    e.preventDefault();
    console.log(e.target);
    this.setState({
      userId: e.target.attributes.candidateId.value,
      companyId: e.target.attributes.companyId.value,
      jobId: e.target.attributes.jobId.value
    });
    this.toggleModalAccept();
  };
  onReject = e => {
    e.preventDefault();
    this.toggleModalReject();
    this.setState({
      userId: e.target.attributes.candidateId.value,
      companyId: e.target.attributes.companyId.value,
      jobId: e.target.attributes.jobId.value
    });
    this.toggleModalReject();
  };
  render() {
    return (
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th> Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>order</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {this.props.companyDashBoard[0] &&
            this.props.companyDashBoard[0].map((elm, i) => (
              <tr>
                <th scope="row">{i}</th>
                <td onClick={this.goProfile.bind(this)} candidateId={elm._id}>
                  {elm.name}
                </td>

                <td>{elm.email}</td>
                <td>{elm.phone || "anonymous phone number"}</td>
                <td>{elm.location || "unknown"}</td>
                <td>{elm.offerName}</td>
                <td>
                  <button
                    onClick={this.onAccept}
                    jobId={elm.offerId}
                    candidateId={elm._id}
                    companyId={elm.companyId}
                  >
                    Accept
                  </button>
                  <Modal
                    isOpen={this.state.modalAccept}
                    toggle={this.toggelModalAccept}
                    className={this.props.className}
                  >
                    <ModalHeader toggle={this.toggleModalAccept.bind(this)}>
                      Edit Education
                    </ModalHeader>
                    <ModalBody>
                      <Form
                        id={elm.companyId}
                        onSubmit={this.handelAcceptRequest}
                      >
                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="date">date interview </Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input type="date" id="date" name="date" />
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="message"> Message </Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input
                              type="textarea"
                              id="message"
                              name="message"
                              placeholder=" your message here"
                            />
                          </Col>
                        </FormGroup>

                        <ModalFooter>
                          <Button
                            type="submit"
                            color="primary"
                            onSubmit={this.handelAcceptRequest}
                          >
                            Accept condidate
                          </Button>
                          <Button
                            color="secondary"
                            onClick={this.toggleModalAccept.bind(this)}
                          >
                            Cancel
                          </Button>
                        </ModalFooter>
                      </Form>
                    </ModalBody>
                  </Modal>
                  <button
                    onClick={this.onReject}
                    jobId={elm.offerId}
                    candidateId={elm._id}
                    companyId={elm.companyId}
                  >
                    Reject
                  </button>
                  <Modal
                    isOpen={this.state.modalReject}
                    toggle={this.toggleModalReject}
                    className={this.props.className}
                  >
                    <ModalHeader toggle={this.toggleModalReject.bind(this)}>
                      Edit Education
                    </ModalHeader>
                    <ModalBody>
                      <Form
                        id={elm.companyId}
                        onSubmit={this.handelRejectRequest}
                      >
                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="message"> Message </Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input
                              type="textarea"
                              id="message"
                              name="message"
                              placeholder=" your message here"
                            />
                          </Col>
                        </FormGroup>

                        <ModalFooter>
                          <Button
                            type="submit"
                            color="primary"
                            onSubmit={this.handelRejectRequest}
                          >
                            Reject condidate
                          </Button>
                          <Button
                            color="secondary"
                            onClick={this.toggleModalReject.bind(this)}
                          >
                            Cancel
                          </Button>
                        </ModalFooter>
                      </Form>
                    </ModalBody>
                  </Modal>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    );
  }
}
const mapStateToProps = state => ({
  companyDashBoard: state.posts.companyDashBoard,
  authInfo: state.auth
});
export default withRouter(
  connect(mapStateToProps, {
    companyDashboard,
    acceptCondidate,
    rejectCondidate
  })(DataTable)
);
