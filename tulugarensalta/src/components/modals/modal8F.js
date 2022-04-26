import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Carousel8F from '../carousel/department/carousel8F';
import { FaSearchPlus } from 'react-icons/fa';
import Services8F from './tServices/tServices8F';

const Modal8F = () => {
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
          <Modal.Title id="example-custom-modal-styling-title"> Departamento Gorriti 2 </Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <Carousel8F />
          <Services8F />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modal8F;
