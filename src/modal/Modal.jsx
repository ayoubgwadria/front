import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
function ModalLayout({ modal, toggle, children, size }) {
  return (
    <>
      <div style={{ zIndex: "999999" }}>
        <Modal isOpen={modal} toggle={toggle} size={size}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Valider
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Annuler
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

export default ModalLayout;
