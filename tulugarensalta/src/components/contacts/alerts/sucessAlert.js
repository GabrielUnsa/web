import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import './alert.css'

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="sucess">
            Envio Correcto 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="align-text-center">
          Se envio sadisfactoriamente el correo, nos estaremos comunicando a la brebedad con usted.
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
