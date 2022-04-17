import { Row, Col, Form, FloatingLabel, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Example from './alerts/sucessAlert';
import './contacts.css';

export default function FormContact(){

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oqsdh7t', 'template_yzwzhx4', form.current, 'KTC9fGDgw5scUYgrl')
      .then((result) => {
        <Example />
      }, (error) => {
        <Alert variant="warning">
        </Alert>
      });
  };

  return(
    <Form ref={form} onSubmit={sendEmail}>
      <h3> Envianos un Mensaje </h3>
      <br />
      <Row className="g-2">
        <Col md>
          <FloatingLabel
            controlId="floatingInput"
            label="Nombre"
            className="mb-3"
          >
            <Form.Control type="text" name="user_name" placeholder="Juan Perez" />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3"
          >
            <Form.Control type="email" name="user_email" placeholder="email@example.com" />
          </FloatingLabel>
        </Col>
      </Row>
      <FloatingLabel
        controlId="floatingInput"
        label="Asunto"
        className="mb-3"
      >
        <Form.Control type="text" name="user_subject" placeholder="Consulta de Disponibilidad" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Consulta">
        <Form.Control
          as="textarea"
          name="message"
          placeholder="Deje su consulta aqui"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <br />
      <Button  className="container-fluid" variant="primary" size="lg" type="submit">
        Enviar
      </Button>
    </Form>
  );
}
