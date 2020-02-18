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

class Language extends Component {
  state = {
    nbLanguage: this.props.userLanguages.length,
    languageListDisplay: {},
    modal: false,
    id: ""
  };
  toggle(e) {
    this.setState({
      modal: !this.state.modal,
      id: e.target.id
    });
  }

  deleteLanguage = el => {
    document.getElementById(el.target.id).style.display = "none";
    const languageId = el.target.id;
    //call action
    this.props.deleteLanguage(this.props.cvId, languageId);
  };
  updateLanguage = el => {
    el.preventDefault();
    this.setState({
      modal: !this.state.modal
    });
    let newLanguage = {};
    newLanguage.name = el.target.name.value;
    newLanguage.level = el.target.level.value;

    const languageId = this.state.id;
    this.props.updateLanguage(this.props.cvId, languageId, newLanguage);
  };
  componentWillMount() {
    this.state.languageListDisplay = this.renderLanguage();
    console.log(this.state.languageListDisplay);
  }
  renderLanguage = () => {
    console.log(this.props);
    return (
      <div className="insideInfo">
        {this.props.userLanguages.map((el, i) => {
          return (
            <div className="contInfo" id={el._id} key={i} ref={React.createRef}>
              <div className="innerInfo">
                <span>Language : </span>
                {el.name}
              </div>
              <div className="innerInfo">
                <span>Level : </span>
                {el.level}
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
                    <Form id={el._id} onSubmit={this.updateLanguage}>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="language">Language</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="langauges .."
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="diploma">Level</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input
                            type="select"
                            name="level"
                            id="degree"
                            bsSize="sm"
                          >
                            <option value="Basic">Basic level</option>
                            <option value="Intermidate">
                              Intermediate level
                            </option>
                            <option value="Advanced">Advanced level</option>
                            <option value="Native">Native</option>
                          </Input>
                        </Col>
                      </FormGroup>
                      <ModalFooter>
                        <Button
                          type="submit"
                          color="primary"
                          onSubmit={this.updateLanguage}
                        >
                          Update my Language
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
                <button id={el._id} onClick={this.deleteLanguage}>
                  <FontAwesomeIcon
                    style={{ pointerEvents: "none" }}
                    icon={faTrash}
                  />
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
        {this.renderLanguage()}
      </div>
    );
  }
}

export default Language;
