import { Container, Row, Col } from 'react-bootstrap'
import { BsPeopleFill } from 'react-icons/bs';
import { IoIosBed } from 'react-icons/io';
import { GiBunkBeds, GiHomeGarage } from 'react-icons/gi';
import { MdBalcony, MdOutlineBedroomChild } from 'react-icons/md';
import './tServices.css';

const Services2A  = () => (
<div id="servicios"> 
  <br />
  <br />
  <Container >
    <br />
    <Row className="leftText">
      <Col> <h4> <BsPeopleFill /> 4 - 5 Personas </h4> </Col>
      <Col> <h4> <IoIosBed/> 1 Cama Matrimonial </h4> </Col>
      <Col> <h4> <GiBunkBeds/> 2 Sommier una Plaza </h4> </Col>
    </Row>
    <br />
    <Row className="leftText">
    <Col>
      <h4> <MdBalcony/> Zona Paseo de los Poetas</h4>
    </Col>
    <Col>
      <h4> <MdOutlineBedroomChild/> 2 Habitaciones </h4>
    </Col>
    <Col>
      <h4> <GiHomeGarage /> Mismo edificio </h4>
    </Col>
   </Row>
  </Container>
  <br />
</div>
);
export default Services2A;
