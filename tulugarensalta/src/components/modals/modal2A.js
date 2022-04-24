import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Carousel8A from '../carousel/department/data';


const Modal2A = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="xl"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title> Monoambiente Alvarado 8A </Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <Carousel8A />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modal2A;
