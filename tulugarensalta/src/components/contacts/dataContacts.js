import { Container, Row } from 'react-bootstrap';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { SiMaildotru } from 'react-icons/si';
import { ImFacebook } from 'react-icons/im';

export default function DataContact(){
  return(
    <Container>
      <Row md="auto" className="justify-content-start">
        <h3> <BsWhatsapp /> {' '} +54 3874049071 </h3>
      </Row>
      <br />   
      <Row md="auto" className="justify-content-start">
        <h3> <SiMaildotru /> {' '} tulugarensalta@gmail.com </h3>
      </Row>
      <br />
      <Row md="auto" className="justify-content-start">
        <h3> <ImFacebook /> {' '} Tu Lugar en Salta </h3>
      </Row>
      <br />
      <Row md="auto" className="justify-content-start">
        <h3> <BsInstagram /> {' '} _tulugarensalta_ </h3>
      </Row>
    </Container>
  );
}
