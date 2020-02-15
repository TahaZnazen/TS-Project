import React, { Component } from "react";
import UserJobs from "./UserJobs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
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
      <div className="profileInfo">
        <div className="nestedProfileInfo">
          <div className="profilePhotoContainer">
            <div
              className="profileViewImg"
              style={{ backgroundImage: `url(${photo})` }}
            ></div>
          </div>

          <div className="ProfileText">
            <div className="d-flex calls">
              <h3 className="text-center mb-5">
                <span
                  style={{
                    fontSize: "40px",
                    fontWeight: "bolder",
                    color: "#ffc107"
                  }}
                >
                  FULL NAME
                </span>
                <br />
                {name.toUpperCase()}
              </h3>
            </div>

            <h3>
              <span className="mr-2 textTitle">PHONE NUMBER : </span>
              {phone}
            </h3>
            <h3>
              <span className="mr-2 textTitle">GENDER : </span>
              {gender}
            </h3>
            <h3>
              <span className="mr-2 textTitle">NATIONALITY : </span>
              {nationality}
            </h3>
            <h3>
              <span className="mr-2 textTitle">LOCATION : </span>
              {location}
            </h3>
            <h3>
              <span className="mr-2 textTitle">EXPERTISE : </span>
              {expertise}
            </h3>
            <button
              style={{
                position: "absolute",
                top: "35%",
                right: "28%",
                width: "5vh",
                height: "5vh"
              }}
              className="editButton"
              onClick={this.toggle.bind(this)}
            >
              <FontAwesomeIcon icon={faCogs} />
            </button>
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
                      <Input
                        type="file"
                        id="photo"
                        name="photo"
                        accept="image/*"
                      />
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
        </div>
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
        <div>{this.renderInfo()}</div>

        <div>
          <UserJobs appliedJobs={this.state.jobsDetails} />
        </div>
      </div>
    );
  }
}

export default Info;
