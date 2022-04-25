import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Carousel3A from '../carousel/department/carousel3A';
import { FaSearchPlus } from 'react-icons/fa';
import Services5D3A from './tServices/tServices5D3A';

const Modal3A = () => {
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
          <Modal.Title id="example-custom-modal-styling-title"> Monoambiente Alvarado 3A </Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <Carousel3A />
          <Services5D3A />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modal3A;
