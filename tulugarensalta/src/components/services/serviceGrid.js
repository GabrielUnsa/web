import { Container, Row, Col } from 'react-bootstrap'
import { TiWiFi } from 'react-icons/ti';
import { FaBath, FaRegSnowflake } from 'react-icons/fa';
import { GiHomeGarage, GiElevator } from 'react-icons/gi';
import { FiTv } from 'react-icons/fi';
import { MdKitchen, MdOutlineLocalLaundryService, MdLocationCity } from 'react-icons/md';

const ServiceGrid  = () => (
  <Container>
    <h1 class="display-4"> Servicios </h1>
    <br />
    <Row className="justify-content-start">
      <Col >
        <h2> <TiWiFi /> WiFi </h2>
      </Col>
      <Col>
        <h2> <MdOutlineLocalLaundryService /> Lavarropas </h2>
      </Col>
      <Col>
        <h2> <GiHomeGarage /> Cochera </h2>
      </Col>
    </Row>
    <br />
    <Row className="justify-content">
      <Col>
        <h2> <FiTv /> Tv </h2>
      </Col>
      <Col>
        <h2> <MdKitchen /> Cocina </h2>
      </Col>
      <Col>
        <h2> <GiElevator /> Acensor </h2>
      </Col>
    </Row>
    <br />
    <Row className="justify-content">
      <Col>
        <h2> <FaRegSnowflake /> Aire Acondicionado </h2>
      </Col>
      <Col>
        <h2> <FaBath /> Baño Privado </h2>
      </Col>
      <Col>
        <h2> <MdLocationCity /> Ubicacion Centrica </h2>
      </Col>
    </Row>
  </Container>
);

export default ServiceGrid;
