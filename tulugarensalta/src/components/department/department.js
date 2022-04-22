import { Card, Row, Col, Container } from "react-bootstrap";
import Modal8A from '../modals/modal8A';
import Modal2A from '../modals/modal2A';
import Modal3A from '../modals/modal3A';
import Modal5G from '../modals/modal5G';
import imgP1 from '../../assets/img/portada/8A_P.jpg';
import imgP2 from '../../assets/img/portada/A2A_P.jpg';
import imgP3 from '../../assets/img/portada/A3D_P.jpg';
import imgP4 from '../../assets/img/portada/G5D_P.jpg';

const departments = [
  {
    img: imgP1,
    label: '8A_P',
    title: '8A',
    description: 'This is a longer card with supporting text below as a natural, lead-in to additional content. This content is a little bit longer.',
    modal: <Modal8A/>,
  },
  {
    img: imgP2,
    label: 'A2A_P',
    title: 'A2',
    description: 'This is a longer card with supporting text below as a natural, lead-in to additional content. This content is a little bit longer.',
    modal: <Modal2A/>,
  },
  {
    img: imgP3,
    label: 'A3D_P',
    title: 'A3',
    description: 'This is a longer card with supporting text below as a natural, lead-in to additional content. This content is a little bit longer.',
    modal: <Modal3A/>
  },
  {
    img: imgP4,
    label: 'G5D_P',
    title: 'G5',
    description: 'This is a longer card with supporting text below as a natural, lead-in to additional content. This content is a little bit longer.',
    modal: <Modal5G/>,
  },
];

const CardsDepartament = () => (
<div id="departamentos">
  <br />
  <br />
  <Container> 
    <h1 className="display-4">Departamentos</h1>
    <br />
      <Row xs={1} md={4}>
        {departments.map((step) => (
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
