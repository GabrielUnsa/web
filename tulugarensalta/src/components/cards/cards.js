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
 <Container> 
<h1 class="display-4">Departamentos</h1>
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
          <Button variant="outline-dark">Dark</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
<br />
   {images.map(step => (
<div>
  <Card>
  <Row className='no-gutters'>
  <Col md={4} lg={4}  >
  <Card.Img variant="top" src={step.imgPath} />
  </Col>
  <Col>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  </Col>
  </Row>
</Card>
  <br />
 </div>
  ))}
</Container>
   );
export default CardsDepartament;
