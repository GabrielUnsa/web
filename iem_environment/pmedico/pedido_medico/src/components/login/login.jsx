  import { Form, Card, Button, Container, Col, Row, OverlayTrigger, Tooltip} from 'react-bootstrap';
import user from '../../img/user.png';
import './login.css';
import { FiLogIn } from "react-icons/fi";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Ultimo inicio de sesion
  </Tooltip>
);
  const Login = () => (
    <Container>
      <Col md={{ span: 4, offset: 4 }}>
        <Card className="cardLogin justify-center" border="None">
        <Container>
          <Row className="justify-content-md-center">
            <img src={user} alt="Usuario" className="userImg"/>
          </Row>
        </Container>
        <Card.Body>
          <Card.Title className="fs-2 text-center"> INICIE SESION </Card.Title>
          <br />
          <Form>
            <Form.Group className="mb-3 fs-4" controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="username" placeholder="Usuario" />
            </Form.Group>
            <Form.Group className="mb-3 fs-4" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Container>            
              <Row className="justify-content-md-center">
                <Button variant="outline-primary" type="submit" size="lg"> 
                    Ingresar
                 </Button>
              </Row>
            </Container>
          </Form>
        </Card.Body>
        <br />
        <OverlayTrigger placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip} >
          <Card.Footer className="text-muted text-center"> Hace 2 dias</Card.Footer>
        </OverlayTrigger>
        </Card>
      </Col>
    </Container>
);

export default Login;
