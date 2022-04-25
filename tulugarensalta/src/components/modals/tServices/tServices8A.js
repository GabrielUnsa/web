import { Container, Row, Col } from 'react-bootstrap'
import { BsPeopleFill } from 'react-icons/bs';
import { IoIosBed } from 'react-icons/io';
import { GiBunkBeds, GiHomeGarage, GiWashingMachine } from 'react-icons/gi';
import { MdBalcony } from 'react-icons/md';
import './tServices.css';

const Services8A  = () => (
<div id="servicios"> 
  <br />
  <br />
  <Container >
    <br />
    <Row className="leftText">
      <Col> <h4> <BsPeopleFill /> 4 - 6 Personas </h4> </Col>
      <Col> <h4> <IoIosBed/> 1 Cama Matrimonial </h4> </Col>
      <Col> <h4> <GiBunkBeds/> 2 Sommier una Plaza </h4> </Col>
    </Row>
    <br />
    <Row className="leftText">
    <Col>
      <h4> <MdBalcony/> Balcon Vista a las montañas</h4>
    </Col>
    <Col>
      <h4> <GiWashingMachine /> Lavarropas </h4>
    </Col>
    <Col>
      <h4> <GiHomeGarage /> Mismo edificio </h4>
    </Col>
   </Row>
  </Container>
  <br />
</div>
);
export default Services8A;
