import React, { Component } from "react";
import { connect } from "react-redux";
import { addSkill } from "../actions/cvActions";

import { Form, FormGroup, Col, Label, Button, Input } from "reactstrap";

class formTest extends Component {
  state = {
    displaySkills: {},
    key: 0
  };

  handleSubmit = e => {
    e.preventDefault();
    let newSkill = {};
    newSkill.name = e.target.name.value;
    newSkill.level = e.target.level.value;

    const id = this.props.cvUser[0]._id;
    this.props.addSkill(id, newSkill);

    let elementToDelete = e.target.id;

    let newDisplay = this.state.displaySkills;
    delete newDisplay[elementToDelete];
    this.setState({ displaySkills: newDisplay });
  };

  renderForm = () => {
    return (
      <Form
        id={this.state.key}
        onSubmit={this.handleSubmit}
        key={this.state.key}
      >
        <FormGroup row>
          <Col md="3">
            <Label htmlFor="language">skills </Label>
          </Col>
          <Col xs="12" md="9">
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="skill name  .."
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="3">
            <Label htmlFor="level">Level</Label>
          </Col>
          <Col xs="12" md="9">
            <Input type="select" name="level" id="degree" bsSize="sm">
              <option value="Basic">Basic level</option>
              <option value="Intermidate">Intermediate level</option>
              <option value="Advanced">Advanced level</option>
            </Input>
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
    const skillsForms = this.state.displaySkills;

    skillsForms[this.state.key] = this.renderForm();

    let newKey = this.state.key + 1;
    this.setState({
      displaySkills: skillsForms,
      key: newKey
    });
  }
  render() {
    return (
      <div>
        <div className="card animated fadeInLeft">
          <div className="card-body">
            <h3 className="card-title">My skillls</h3>
            <hr />
            <div>
              <button
                className="btn btn-info"
                onClick={this.renderNewForm.bind(this)}
              >
                add new Skill
              </button>
            </div>
          </div>
        </div>

        <div>{Object.values(this.state.displaySkills)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { addSkill })(formTest);
