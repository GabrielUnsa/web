import { Row, Col, Form, FloatingLabel, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import SuccessAlert from './sweetalerts/SuccessSwAl';
import WarningAlert from './sweetalerts/WarningSwAl';
import ReCAPTCHA from 'react-google-recaptcha';
import './contacts.css';

export default function FormContact( props ){

  const form = useRef();
  const captcha = useRef(null);

  const [status, setStatus] = useState(undefined);
  const [valueCaptcha, setValueCaptcha] = useState(undefined);

  const onChange = () =>{
    if( captcha.current.getValue() ){
      setValueCaptcha(true);
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if ( captcha.current.getValue() ){
      emailjs.sendForm('service_oqsdh7t', 'template_yzwzhx4', form.current, 'KTC9fGDgw5scUYgrl')
        .then((result) => {
          setStatus({ type: 'success' });
        }, (error) => {
          setStatus({ type: 'error', error });
        });
    }else{
      setValueCaptcha(false);
    }
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
            <Form.Control required type="text" name="user_name" placeholder="Juan Perez" />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3"
          >
            <Form.Control required type="email" name="user_email" placeholder="email@example.com" />
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
          required
        />
      </FloatingLabel>
      <br />
        < ReCAPTCHA
            ref={captcha}
            sitekey="6LeXaIcfAAAAAFmWB0nIBrFvmu6t83uZMLpFdvI9"
            onCharge={onChange}
          />
      <br />
      { valueCaptcha === false && (<Alert variant="warning"> Debe aceptar el captcha </Alert>) }
      <Button  className="container-fluid" variant="primary" size="lg" type="submit">
        Enviar
      </Button>
      { status?.type === 'success' && <SuccessAlert/> }
      { status?.type === 'error' && <WarningAlert/> }
    </Form>
  );
}
