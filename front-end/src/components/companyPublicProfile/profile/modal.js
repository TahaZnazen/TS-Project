import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./companyProfile.css";

const ModalExample = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        className="mt-3 DescBtn"
        style={{ fontSize: "18px", background: "none" }}
        onClick={toggle}
      >
        Show Company Description
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          <h1 style={{ fontSize: "40px", color: "	#ffc107" }}>
            {props.name + ", Description"}
          </h1>
        </ModalHeader>
        <ModalBody>{props.description}</ModalBody>
      </Modal>
    </div>
  );
};

export default ModalExample;
