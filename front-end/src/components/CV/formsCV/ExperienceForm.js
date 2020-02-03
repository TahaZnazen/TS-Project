import React, { Component } from "react";
import { connect } from "react-redux";
import { addExperience } from "../../../actions/cvActions";

import { Form, FormGroup, Col, Label, Button, Input } from "reactstrap";

class ExperienceForm extends Component {
  state = {
    displayExperience: {},
    key: 0
  };

  handleSubmit = e => {
    e.preventDefault();

    let newExperience = {};
    newExperience.start = e.target.start.value;
    newExperience.end = e.target.end.value;
    newExperience.companyName = e.target.companyName.value;
    newExperience.position = e.target.positionName.value;
    newExperience.task = e.target.task.value;

    const id = this.props.cvUser[0]._id;
    this.props.addExperience(id, newExperience);
    let elementToDelete = e.target.id;
    let newDisplay = this.state.displayExperience;
    delete newDisplay[elementToDelete];
    this.setState({ displayExperience: newDisplay });
  };

  renderForm = () => {
    return (
      <Form id={this.state.key} onSubmit={this.handleSubmit}>
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
              invalid
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
              invalid
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
            <Input type="date" id="end" name="end" placeholder="date" />
          </Col>
        </FormGroup>
        <Button
          type="submit"
          size="sm"
          color="primary"
          onSubmit={this.handleSubmit}
        >
          Add to my profil
        </Button>
      </Form>
    );
  };

  renderNewForm() {
    const experienceForms = this.state.displayExperience;

    experienceForms[this.state.key] = this.renderForm();

    let newKey = this.state.key + 1;
    this.setState({
      displayExperience: experienceForms,
      key: newKey
    });
  }
  render() {
    return (
      <div>
        <div className="card animated fadeInLeft">
          <div className="card-body">
            <h3 className="card-title">My Experiences</h3>
            <hr />
            <div>
              <button
                className="btn btn-info"
                onClick={this.renderNewForm.bind(this)}
              >
                add Experience
              </button>
            </div>
          </div>
        </div>

        <div>{Object.values(this.state.displayExperience)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { addExperience })(ExperienceForm);
