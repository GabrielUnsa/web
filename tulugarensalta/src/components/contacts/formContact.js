import { Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';
import emailjs from 'eamiljs-com';

export default function FormContact(){
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_oqsdh7t','template_yzwzhx4',e.target,'KTC9fGDgw5scUYgrl').then();
  }

  return(
    <Form onSubmit={sendEmail}>
      <h3> Envianos un Mensaje </h3>
      <br />
      <Row className="g-2">
        <Col md>
          <FloatingLabel
            controlId="floatingInput"
            label="Nombre"
            className="mb-3"
          >
            <Form.Control type="Nombre" placeholder="Juan Perez" />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="email@example.com" />
          </FloatingLabel>

        </Col>
      </Row>
      <FloatingLabel
        controlId="floatingInput"
        label="Asunto"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Consulta de Disponibilidad" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Consulta">
        <Form.Control
          as="textarea"
          placeholder="Deje su consulta aqui"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <br />
        <Button variant="primary" type="submit" className="d-flex">
         Enviar
        </Button>
    </Form>
  );
}
