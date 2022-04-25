import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Carousel2A from '../carousel/department/carousel2A';
import { FaSearchPlus } from 'react-icons/fa';
import Services2A from './tServices/tServices2A';

const Modal2A = () => {
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
          <Modal.Title id="example-custom-modal-styling-title"> Monoambiente Alvarado 2A </Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <Carousel2A />
          <Services2A />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modal2A;
