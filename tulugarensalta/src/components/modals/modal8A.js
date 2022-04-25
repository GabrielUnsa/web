import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Carousel8A from '../carousel/department/carousel8A';
import { FaSearchPlus } from 'react-icons/fa';
import Services8A from './tServices/tServices8A';

const Modal8A = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Mas Información {' '} <FaSearchPlus size={20}/> 
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="xl"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"> Monoambiente Alvarado 8A </Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <Carousel8A />
          <Services8A />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modal8A;
