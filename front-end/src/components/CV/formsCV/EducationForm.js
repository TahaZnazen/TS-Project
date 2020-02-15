import React, { Component } from "react";
import { connect } from "react-redux";
import { addEducation } from "../../../actions/cvActions";

import { Form, FormGroup, Col, Label, Button, Input } from "reactstrap";

class EducationForm extends Component {
  state = {
    displayEducation: {},
    displayInfo: [],
    key: 0
  };

  handleSubmit = e => {
    e.preventDefault();
    let newEducation = {};
    newEducation.start = e.target.start.value;
    newEducation.end = e.target.end.value;
    newEducation.degree = e.target.degree.value;
    newEducation.diploma = e.target.diploma.value;
    newEducation.establishment = e.target.establishment.value;

    if (e.target.end.value > e.target.start.value) {
      const id = this.props.cvUser[0]._id;
      this.props.addEducation(id, newEducation);

      let elementToDelete = e.target.id;
      let newDisplay = this.state.displayEducation;
      delete newDisplay[elementToDelete];
      this.setState({ displayEducation: newDisplay });

      //render the new value
      let newRenderInfo = this.state.displayInfo;
      newRenderInfo.unshift(this.renderInfo(newEducation));
      this.setState({ displayInfo: newRenderInfo });
    } else {
      alert("please verfie date of your education");
    }
  };

  renderInfo = obj => {
    return (
      <div>
        <div>
          <div>
            <strong>Diploma: </strong>
            {obj.diploma}
          </div>
          <div>
            <strong>Degree: </strong>
            {obj.degree}
          </div>
          <div>
            <strong>establishment: </strong>
            {obj.establishment}
          </div>
          <div>
            <strong>Start: </strong>
            {obj.start}
          </div>
          <div>
            <strong>End: </strong>
            {obj.end}
          </div>
        </div>
        <hr />
      </div>
    );
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
            <Label htmlFor="diploma">Diploma</Label>
          </Col>
          <Col xs="12" md="9">
            <Input
              type="text"
              id="diploma"
              name="diploma"
              placeholder="diploma name ..."
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="3">
            <Label htmlFor="diploma">Degree</Label>
          </Col>
          <Col xs="12" md="9">
            <Input type="select" name="degree" id="degree" bsSize="sm">
              <option value="Bachelor">Bachelor</option>
              <option value="Master">Master</option>
              <option value="Engineer">Engineer</option>
              <option value="Phd">Phd</option>
              <option value="Others">Others</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="3">
            <Label htmlFor="establishment"> establishment</Label>
          </Col>
          <Col xs="12" md="9">
            <Input
              type="text"
              id="establishment"
              name="establishment"
              placeholder="establishment name ..."
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
          Add to my profile
        </Button>
      </Form>
    );
  };

  renderNewForm() {
    const educationsForms = this.state.displayEducation;

    educationsForms[this.state.key] = this.renderForm();

    let newKey = this.state.key + 1;
    this.setState({
      displayEducation: educationsForms,
      key: newKey
    });
  }
  render() {
    return (
      <div>
        <div className="card animated fadeInLeft">
          <div className="card-body">
            <h3 className="card-title">My Educations</h3>
            <hr />
            <div>
              <button
                className="btn btn-info"
                onClick={this.renderNewForm.bind(this)}
              >
                add new education
              </button>
            </div>
          </div>
        </div>

        <div>{Object.values(this.state.displayEducation)}</div>
        <hr />
        <div>{this.state.displayInfo}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return state;
};

export default connect(mapStateToProps, { addEducation })(EducationForm);
