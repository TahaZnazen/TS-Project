import React, { Component } from "react";

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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nbExperience: this.props.userExperience.length,
      experienceListDisplay: {},
      modal: false,
      id: ""
    };
  }

  toggle(e) {
    this.setState({
      modal: !this.state.modal,
      id: e.target.id
    });
  }

  deleteExperience = el => {
    document.getElementById(el.target.id).style.display = "none";
    const experienceId = el.target.id;
    this.props.deleteExperience(this.props.cvId, experienceId);
  };

  updateExperience = el => {
    el.preventDefault();
    this.setState({ modal: !this.state.modal });
    let newExperience = {};
    newExperience.start = el.target.start.value;
    newExperience.end = el.target.end.value;
    newExperience.companyName = el.target.companyName.value;
    newExperience.position = el.target.positionName.value;
    newExperience.task = el.target.task.value;

    const experienceId = this.state.id;
    console.log(experienceId);
    this.props.updateExperience(this.props.cvId, experienceId, newExperience);
  };

  componentWillMount() {
    this.state.experienceListDisplay = this.renderExperience();
  }
  renderExperience = () => {
    return (
      <div className="insideInfo">
        {this.props.userExperience &&
          this.props.userExperience.map((el, i) => {
            return (
              <div className="dataFlow" id={el._id} key={i}>
                <div className="innerInfo">
                  <span>Company Name : </span>
                  {el.companyName}
                </div>
                <div className="innerInfo">
                  <span>Position : </span>
                  {el.position}
                </div>
                <div className="innerInfo">
                  <span>Task : </span>
                  {el.task}
                </div>
                <div className="time">
                  <div>
                    <span>Start Date : </span>
                    {el.start}
                  </div>
                  <div>
                    <span>End Date : </span>
                    {el.end}
                  </div>
                </div>
                <div className="helpBtn">
                  <button id={el._id} onClick={this.toggle.bind(this)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                  >
                    <ModalHeader toggle={this.toggle.bind(this)}>
                      Edit Experience
                    </ModalHeader>
                    <ModalBody>
                      <Form id={el._id} onSubmit={this.updateExperience}>
                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="companyName">Company Name</Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input
                              type="text"
                              id="companyName"
                              name="companyName"
                              placeholder="company Name"
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="Position">Position </Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input
                              type="text"
                              id="positionName"
                              name="positionName"
                              placeholder="your position name"
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="textarea-input">Tasks</Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input
                              type="textarea"
                              name="task"
                              id="task"
                              rows="5"
                              placeholder="your tasks..."
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="start">Start Date</Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input
                              type="date"
                              id="start"
                              name="start"
                              placeholder="start at ..."
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="end">End Date</Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input
                              type="date"
                              id="end"
                              name="end"
                              placeholder="date"
                            />
                          </Col>
                        </FormGroup>
                        <ModalFooter>
                          <Button
                            type="submit"
                            color="primary"
                            onSubmit={this.updateExperience}
                          >
                            Update my experience
                          </Button>
                          <Button
                            color="secondary"
                            onClick={this.toggle.bind(this)}
                          >
                            Cancel
                          </Button>
                        </ModalFooter>
                      </Form>
                    </ModalBody>
                  </Modal>
                  <button id={el._id} onClick={this.deleteExperience}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    );
  };

  render() {
    console.log("experience", this.props);
    return (
      <div style={{ width: "100%", height: "100%" }}>
        {this.renderExperience()}
      </div>
    );
  }
}

export default Experience;
