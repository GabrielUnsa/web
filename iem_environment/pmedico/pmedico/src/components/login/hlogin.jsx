import unsa from './img/logoUnsa.png';
import iem from './img/logoIem.svg';
import { Container, Box } from '@mui/material';
import './login.css'


const LoginHeader = () =>  (
  <header>
    <Container>
      <Box className="login-header">
      <img src={unsa} alt="Logo Unsa" />
      <div className="tittleHeader">
        <div><span> Universida Nacional de Salta </span></div>
        <div><span> Instituto de Educacion Media </span></div>
        <div><span> "Dr. Arturo Oñativia" </span></div>
      </div>
      <img src={iem} alt="Logo IEM" />
      </Box>
    </Container>
  </header>
  );

export default LoginHeader;

