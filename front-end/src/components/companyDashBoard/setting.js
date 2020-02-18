import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { findCompany } from "../../actions/offersAction";
import { UpdateComapanyInfo, changePassword } from "../../actions/authActions";
import {
  Form,
  FormGroup,
  Col,
  Label,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "reactstrap";
class CompanySetting extends Component {
  state = {
    id: "",
    modalInfo: false,
    modalPassword: false
  };
  componentDidMount() {
    let token = localStorage.getItem("token");
    axios
      .post("http://localhost:8080/api/users/generateID", { token })
      .then(res => {
        this.setState({ id: res.data.id });
        this.props.findCompany(this.state.id);
      })
      .catch(err => console.log(err));
  }
  toggleModalUpdateInfo(e) {
    this.setState({ modalInfo: !this.state.modalInfo });
  }
  updateInfo = e => {
    e.preventDefault();

    let newInformation = new FormData();
    /*newInformation.name = e.target.name.value;
    newInformation.email = e.target.email.value;*/
    newInformation.append("photo", document.getElementById("photo").files[0]);
    newInformation.append("name", document.getElementById("name").value);
    newInformation.append("email", document.getElementById("email").value);

    console.log("test data", newInformation);

    this.toggleModalUpdateInfo();
    console.log(this.state.id);
    this.props.UpdateComapanyInfo(this.state.id, newInformation);
  };
  updatePassword = e => {
    e.preventDefault();
    if (e.target.password.value !== e.target.confirmPassword.value) {
      alert("password doesn't match");
    } else {
      const newPassword = e.target.password.value;
      this.state.id && this.props.changePassword(this.state.id, newPassword);
      this.toggleModalPassword();
      //redirect to login page page
      //delete the token
      // this.props.history.push("/")
    }
  };
  toggleModalPassword = e => {
    this.setState({ modalPassword: !this.state.modalPassword });
  };
  renderUpdateInfo = () => {
    if (this.props.companyInfo[0]) {
      const { name, email, photo } = this.props.companyInfo[0].data;

      return (
        <Modal
          isOpen={this.state.modalInfo}
          toggle={this.toggleModalUpdateInfo}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggleModalUpdateInfo.bind(this)}>
            Update Company Profile
          </ModalHeader>
          <ModalBody>
            <Form id={this.state.id} onSubmit={this.updateInfo}>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="ComapanyName">Name</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="text"
                    id="name"
                    name="ComapanyName"
                    placeholder="comapny name ..."
                    defaultValue={name}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="email"> Email</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="email adress ..."
                    defaultValue={email}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="photo">photo</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="file" id="photo" name="photo" accept="image/*" />
                </Col>
              </FormGroup>
              <ModalFooter>
                <Button
                  type="submit"
                  color="primary"
                  onSubmit={this.updateInfo}
                >
                  Update my Education
                </Button>
                <Button
                  color="secondary"
                  onClick={this.toggleModalUpdateInfo.bind(this)}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </Form>
          </ModalBody>
        </Modal>
      );
    } else {
      return <div>loading ..</div>;
    }
  };

  renderChangePassword = () => {
    if (this.props.companyInfo[0]) {
      const { email } = this.props.companyInfo[0].data;

      return (
        <Modal
          isOpen={this.state.modalPassword}
          toggle={this.toggleModalUpdateInfo}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggleModalPassword.bind(this)}>
            Change Password
          </ModalHeader>
          <ModalBody>
            <Form id={this.state.id} onSubmit={this.updatePassword}>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="email">Name</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="comapnay email ..."
                    defaultValue={email}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="password"> Email</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password ... "
                    required
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="confirmPassword"> Email</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="confirm password ... "
                    required
                  />
                </Col>
              </FormGroup>
              <ModalFooter>
                <Button
                  type="submit"
                  color="primary"
                  onSubmit={this.updatePassword}
                >
                  Update my password
                </Button>
                <Button
                  color="secondary"
                  onClick={this.toggleModalPassword.bind(this)}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </Form>
          </ModalBody>
        </Modal>
      );
    } else {
      return <div>loading ..</div>;
    }
  };

  ChangeInfo = e => {
    e.preventDefault();
    this.toggleModalUpdateInfo();
  };
  ChangePwd = e => {
    this.toggleModalPassword();
  };

  render() {
    console.log(this.props);
    console.log(this.state);

    return (
      <div
        style={{
          backgroundColor: "#5c6873",
          height: "20vh",
          width: "50vh",
          position: "fixed",
          left: "40vw",
          top: "10vh",
          zIndex: "20",
          padding: "30px"
        }}
      >
        <span
          style={{
            fontSize: "20px",
            position: "absolute",
            top: "5px",
            right: "5px",
            color: "	#ffc107",
            cursor: " pointer"
          }}
          onClick={this.props.toggle}
        >
          x
        </span>
        <h1 style={{ color: "	#ffc107" }}>CompanySetting component</h1>
        <div
          style={{
            width: "100%",
            justifyContent: "center"
          }}
          className="d-flex"
        >
          <div>
            <button
              style={{
                height: "5vh",
                width: "20vh",
                backgroundColor: "	#63c2de",
                border: "none",
                fontSize: "20px"
              }}
              className="mr-2"
              onClick={this.ChangePwd}
            >
              change password
            </button>
          </div>
          <div>
            <button
              className="ml-2"
              style={{
                height: "5vh",
                width: "20vh",
                backgroundColor: "	#63c2de",
                border: "none",
                fontSize: "20px"
              }}
              onClick={this.ChangeInfo}
            >
              Update profile
            </button>

            <div>{this.renderUpdateInfo()}</div>
            <div>{this.renderChangePassword()}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authInfo: state.auth,
  companyInfo: state.posts.companyInfo
});
export default connect(mapStateToProps, {
  findCompany,
  UpdateComapanyInfo,
  changePassword
})(CompanySetting);
