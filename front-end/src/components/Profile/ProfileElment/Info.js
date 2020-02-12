import React, { Component } from "react";
import UserJobs from "./UserJobs";
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
class Info extends Component {
  state = {
    modal: false,
    jobsDetails: []
  };
  toggle(e) {
    this.setState({ modal: !this.state.modal });
  }

  updateInfo = e => {
    e.preventDefault();

    let newInformation = new FormData();
    newInformation.append("name", document.getElementById("name").value);
    newInformation.append("photo", document.getElementById("photo").files[0]);
    newInformation.append(
      "nationality",
      document.getElementById("nationality").value
    );
    newInformation.append("gender", document.getElementById("gender").value);
    newInformation.append(
      "expertise",
      document.getElementById("expertise").value
    );
    newInformation.append(
      "location",
      document.getElementById("locationUser").value
    );
    newInformation.append("phone", document.getElementById("phone").value);
    //const id = this.props.cvUser[0].user_id._id;
    this.toggle();

    this.props.addInfo(this.props.userInfo._id, newInformation);
  };
  renderInfo = () => {
    const {
      name,
      photo,
      phone,
      nationality,
      gender,
      location,
      expertise
    } = this.props.userInfo;

    return (
      <div>
        <div>
          <img alt="user photo" src={photo} width="250px" height="250px" />
        </div>
        <div>
          <h3>{name}</h3>
          <h4>{phone}</h4>
          <h3>{gender}</h3>
          <h4>{nationality}</h4>
          <h4>{location}</h4>
        </div>
        <div>
          <h3>{expertise}</h3>
        </div>
        <button onClick={this.toggle.bind(this)}>Edit</button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle.bind(this)}>
            Edit Information
          </ModalHeader>
          <ModalBody>
            <Form id="user" onSubmit={this.updateInfo}>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="name">Full Name</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={name}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="diploma">Photo</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="file" id="photo" name="photo" accept="image/*" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="phone">Phone Number</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="phone"
                    id="phone"
                    name="phone"
                    defaultValue={phone}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="gender">Gender</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="select"
                    name="gender"
                    id="gender"
                    bsSize="sm"
                    defaultValue={gender}
                  >
                    <option value="Male">Male </option>
                    <option value="Female">Female</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="nationality">Nationality</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="text"
                    id="nationality"
                    name="nationality"
                    defaultValue={nationality}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="location">Location</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="text"
                    id="locationUser"
                    name="location"
                    defaultValue={location}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="start">Experience Level </Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="select"
                    name="expertise"
                    id="expertise"
                    bsSize="sm"
                    defaultValue={expertise}
                  >
                    <option value="Junior">Junior </option>
                    <option value="Senior">Senior</option>
                    <option value="Expert">Expert</option>
                  </Input>
                </Col>
              </FormGroup>
              <ModalFooter>
                <Button
                  type="submit"
                  color="primary"
                  onSubmit={this.updateInfo}
                >
                  Update my Information
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
  };
  componentDidMount() {
    console.log("info props", this.props);
    let id = this.props.userInfo._id;
    let jobs = this.props.jobs(id);
    jobs.then(data => {
      this.setState({ jobsDetails: data.payload });
    });
  }

  render() {
    return (
      <div>
        <div>
          <strong> User Info component </strong>
        </div>
        <div>{this.renderInfo()}</div>

        <div>
          <UserJobs appliedJobs={this.state.jobsDetails} />
        </div>
      </div>
    );
  }
}

export default Info;
