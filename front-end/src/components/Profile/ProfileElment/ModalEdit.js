import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ModalEdit = props => {
  <Modal
    isOpen={this.state.modal}
    toggle={this.toggle}
    className={this.props.className}
  >
    <ModalHeader toggle={this.toggle.bind(this)}>Edit Experience</ModalHeader>
    <ModalBody>
    <Form
       id={el._id} onSubmit={this.updateEducation}
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
          Add to my profil
        </Button>
      </Form>
        <ModalFooter>
          <Button
            type="submit"
            color="primary"
            onSubmit={this.updateExperience}
          >
            Update my experience
          </Button>
          <Button color="secondary" onClick={this.toggle.bind(this)}>
            Cancel
          </Button>
        </ModalFooter>
      </Form>
    </ModalBody>
  </Modal>
};

export default ModalEdit;
