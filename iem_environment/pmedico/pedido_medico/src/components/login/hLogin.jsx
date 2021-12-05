import { Container } from 'react-bootstrap';
import unsa from './logoUnsa.png';
import iem from './logoIem.svg';
import './login.css';

const LoginHeader = () =>  (
  <header>
    <Container fluid className="login-header">
      <img src={unsa} alt="Logo Unsa" />
      <div className="tittleHeader">
        <div><span> Universida Nacional de Salta </span></div>
        <div><span> Instituto de Educacion Media </span></div>
        <div><span> "Dr. Arturo Oñativia" </span></div>
      </div>
      <img src={iem} alt="Logo IEM" />
    </Container>
  </header>
  );

export default LoginHeader;