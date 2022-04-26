import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Carousel5D from '../carousel/department/carousel5D';
import { FaSearchPlus } from 'react-icons/fa';
import Services5D3A from './tServices/tServices5D3A';

const Modal5G = () => {
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
          <Modal.Title id="example-custom-modal-styling-title"> Monoambiente Gorriti 1 </Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <Carousel5D />
          <Services5D3A />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modal5G;
