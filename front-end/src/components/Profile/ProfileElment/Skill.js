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

class Skill extends Component {
  state = {
    nbSkill: this.props.userSkill.length,
    skillListDisplay: [],
    modal: false,
    id: ""
  };
  toggle(e) {
    //console.log("hello", e.target.id);
    this.setState({
      modal: !this.state.modal,
      id: e.target.id
    });
  }
  deleteSkill = el => {
    console.log("delete button work", el.target.id);
    document.getElementById(el.target.id).style.display = "none";
    const skillId = el.target.id;
    this.props.deleteSkill(this.props.cvId, skillId);
  };

  updateSkill = e => {
    e.preventDefault();
    this.setState({
      modal: !this.state.modal
    });
    let newSkill = {};
    newSkill.name = e.target.name.value;
    newSkill.level = e.target.level.value;
    console.log(newSkill);
    this.props.updateSkill(this.props.cvId, this.state.id, newSkill);
  };

  componentWillMount() {
    this.setState({ skillListDisplay: this.renderSkill() });
  }

  renderSkill = () => {
    return this.props.userSkill.map((el, i) => {
      return (
        <div id={el._id} key={i}>
          <div>{el.name}</div>
          <div>{el.level}</div>
          <button id={el._id} onClick={this.toggle.bind(this)}>
            Edit
          </button>
          <button id={el._id} onClick={this.deleteSkill}>
            Delete
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
              <Form onSubmit={this.updateSkill}>
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
                <ModalFooter>
                  <Button
                    name="tes"
                    type="submit"
                    color="primary"
                    type="submit"
                    onSubmit={this.updateSkill}
                  >
                    Update my skill
                  </Button>
                  <Button color="secondary" onClick={this.toggle.bind(this)}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      );
    });
  };

  render() {
    console.log(this.props);
    console.log(this.state);

    return (
      <div>
        <strong>Skill component {this.state.nbSkill}</strong>

        {this.renderSkill()}
      </div>
    );
  }
}

export default Skill;
