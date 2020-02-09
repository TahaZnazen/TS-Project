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

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nbExperience: this.props.userExperience.length,
      experienceListDisplay: {},
      modal: false
    };
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  deleteExperience = el => {
    document.getElementById(el.target.id).style.display = "none";
    const experienceId = el.target.id;
    this.props.deleteExperience(this.props.cvId, experienceId);
  };

  updateExperience = el => {
    this.toggle();

    el.preventDefault();
    let newExperience = {};
    newExperience.start = el.target.start.value;
    newExperience.end = el.target.end.value;
    newExperience.companyName = el.target.companyName.value;
    newExperience.position = el.target.positionName.value;
    newExperience.task = el.target.task.value;

    const experienceId = el.target.id;
    console.log(experienceId);
    this.props.updateExperience(this.props.cvId, experienceId, newExperience);
  };

  componentWillMount() {
    this.state.experienceListDisplay = this.renderExperience();
  }
  renderExperience = () => {
    return (
      <div>
        {this.props.userExperience.map((el, i) => {
          return (
            <div id={el._id} key={i}>
              <div>{el.start}</div>
              <div>{el.end}</div>
              <div>{el.companyName}</div>
              <div>{el.position}</div>
              <div>{el.task}</div>
              <button onClick={this.toggle.bind(this)}>Edit</button>
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
                          defaultValue={el.companyName}
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
                          defaultValue={el.position}
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
                          defaultValue={el.task}
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
                          defaultValue={el.start}
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
                          defaultValue={el.end}
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
                delete
              </button>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    console.log("experience", this.props);
    return (
      <div>
        <div>
          <strong>Experience component {this.state.nbExperience}</strong>
        </div>
        {this.renderExperience()}
      </div>
    );
  }
}

export default Experience;
