import { Card, Row, Col, Container, Button } from "react-bootstrap";
import imgP1 from '../../assets/img/portada/8A_P.jpg';
import imgP2 from '../../assets/img/portada/A2A_P.jpg';
import imgP3 from '../../assets/img/portada/A3D_P.jpg';
import imgP4 from '../../assets/img/portada/G5D_P.jpg';

const images = [
  {
    imgPath: imgP1,
    label: '8A_P',
  },
  {
    imgPath: imgP2,
    label: 'A2A_P',
  },
  {
    imgPath: imgP3,
    label: 'A3D_P',
  },
  {
    imgPath: imgP4,
    label: 'G5D_P',
  },
];

const CardsDepartament = () => (
<div id="departamentos">
  <br />
  <br />
  <Container> 
    <h1 class="display-4">Departamentos</h1>
    <br />
      <Row xs={1} md={4}>
        {images.map((step) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={step.imgPath} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                <Button variant="outline-dark"> Mas Información</Button>
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
