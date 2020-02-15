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
import "../profileView.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
class Education extends Component {
  state = {
    nbEducation: this.props.userEducation.length,
    educationistDisplay: {},
    modal: false,
    id: ""
  };
  toggle(e) {
    this.setState({
      modal: !this.state.modal,
      id: e.target.id
    });
  }
  deleteEducation = el => {
    document.getElementById(el.target.id).style.display = "none";
    const educationId = el.target.id;
    this.props.deleteEducation(this.props.cvId, educationId);
  };
  updateEducation = el => {
    el.preventDefault();
    this.setState({ modal: !this.state.modal });
    let newEducation = {};
    newEducation.start = el.target.start.value;
    newEducation.end = el.target.end.value;
    newEducation.degree = el.target.degree.value;
    newEducation.diploma = el.target.diploma.value;
    newEducation.establishment = el.target.establishment.value;

    let elmentToUpdate = this.state.id;
    this.props.updateEducation(this.props.cvId, elmentToUpdate, newEducation);
  };

  componentWillMount() {
    this.state.educationistDisplay = this.renderEducation();
    console.log(this.state.educationistDisplay);
  }
  renderEducation = () => {
    return (
      <div className="insideInfo">
        {this.props.userEducation.map((el, i) => {
          return (
            <div className="dataFlow" id={el._id} key={i}>
              <div className="innerInfo">
                <span>Diploma : </span>
                {el.diploma}
              </div>
              <div className="innerInfo">
                <span>Degree : </span>
                {el.degree}
              </div>
              <div className="innerInfo">
                <span>Establishment : </span>
                {el.establishment}
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
                    Edit Education
                  </ModalHeader>
                  <ModalBody>
                    <Form id={el._id} onSubmit={this.updateEducation}>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="diploma">Diploma</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input
                            type="text"
                            id="diploma"
                            name="diploma"
                            defaultValue={el.diploma}
                            placeholder="diploma name ..."
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="diploma">Degree</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input
                            type="select"
                            name="degree"
                            id="degree"
                            defaultValue={el.degree}
                            bsSize="sm"
                          >
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
                            defaultValue={el.establishment}
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
                          onSubmit={this.updateEducation}
                        >
                          Update my Education
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
                <button id={el._id} onClick={this.deleteEducation}>
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
    console.log(this.props);
    return (
      <div style={{ width: "100%", height: "100%" }}>
        {this.renderEducation()}
      </div>
    );
  }
}

export default Education;
