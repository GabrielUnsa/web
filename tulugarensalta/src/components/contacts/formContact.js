import { Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';

export default function FormContact(){
  return(
    <Form>
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
      <Row md={2} className="justify-content-center"> 
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Row>
    </Form>
  );
}
