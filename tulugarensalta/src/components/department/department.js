import { Card, Row, Col, Container } from "react-bootstrap";
import Modal8A from '../modals/modal8A';
import Modal2A from '../modals/modal2A';
import Modal3A from '../modals/modal3A';
import Modal5G from '../modals/modal5G';
import Modal8F from '../modals/modal8F';
import imgP1 from '../../assets/img/portada/8A_P.jpg';
import imgP2 from '../../assets/img/portada/A2A_P.jpg';
import imgP3 from '../../assets/img/portada/A3D_P.jpg';
import imgP4 from '../../assets/img/portada/G5D_P.jpg';
import imgP5 from '../../assets/img/portada/8F_P.jpg';

const departmentsGorriti = [
  {
    img: imgP4,
    label: 'G5D_P',
    title: 'Gorriti 1',
    description: 'Monoambiente espacioso ideal para 2 a 4 personas. Vista a las montañas. \n Ubicado a 6 cuadras de la plaza principal y 2 del "Boliche Balderrama".',
    modal: <Modal5G/>,
  },
  {
    img: imgP5,
    label: '8FD_P',
    title: 'Gorriti 2',
    description: 'Departamento con 1 dormitorio, ideal para 2 a 4 personas. Cuenta con balcon con vista a las montañas. \n Ubicado a 6 cuadras de la plaza principal y 2 del "Boliche Balderrama".',
    modal: <Modal8F/>,
  },
  {
    img: imgP1,
    label: '8A_P',
    title: 'Gorriti 3',
    description: 'Departamento 2 dormitorios y 2 baños privados, ideal para 4 a 6 personas. \n Cuenta con Balcon. \n Ubicado a 6 cuadras de la plaza principal y 2 del "Boliche Balderrama".',
    modal: <Modal8A/>,
  },
];

const departmentsAlvarado = [
  {
    img: imgP3,
    label: 'A3D_P',
    title: 'Alvarado 1',
    description: 'Departamento con 1 dormitorio ideal para 2 a 4 personas. Vista a las montañas. \n Ubicado a 6 cuadras de la plaza principal y 2 del "Boliche Balderrama".',
    modal: <Modal3A/>
  },
  {
    img: imgP2,
    label: 'A2A_P',
    title: 'Alvarado 2',
    description: 'Departamento con 2 dormitorios ideal para 4 a 5 personas. Vista a las montañas. \n Ubicado a 6 cuadras de la plaza principal y 2 del "Boliche Balderrama".',    
    modal: <Modal2A/>,
  },
];


const CardsDepartament = () => (
<div id="departamentos">
  <br />
  <br />
  <Container> 
    <h1 className="display-4">Departamentos</h1>
    <br />
      <Row xs={1} md={3}>
        {departmentsGorriti.map((step) => (
          <Col key={ step.label }>
            <Card>
              <Card.Img variant="top" src={step.img} />
              <Card.Body>
                <Card.Title> { step.title } </Card.Title>
                <Card.Text>
                  { step.description }
                </Card.Text>
                { step.modal }
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <br />
    <Row xs={1} md={3} className="justify-content-center">
        {departmentsAlvarado.map((step) => (
          <Col key={ step.label }>
            <Card>
              <Card.Img variant="top" src={step.img} />
              <Card.Body>
                <Card.Title> { step.title } </Card.Title>
                <Card.Text>
                  { step.description }
                </Card.Text>
                { step.modal }
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    <br />
  </Container>
  <br />
</div>
);
export default CardsDepartament;
