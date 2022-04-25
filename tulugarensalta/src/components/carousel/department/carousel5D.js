import bedroom3A from '../../../assets/img/departamentos/ALVARADO 3D/Dormitorio 1.jpg';
import bedroom3A_2 from '../../../assets/img/departamentos/ALVARADO 3D/Dormitorio 2.JPG';
import kitchen3A from '../../../assets/img/departamentos/ALVARADO 3D/Cocina 1.jpg';
import kitchen3A_2 from '../../../assets/img/departamentos/ALVARADO 3D/Cocina 2.JPG';
import livingroom3A from '../../../assets/img/departamentos/ALVARADO 3D/Sala.JPG';
import livingroom3A_2 from '../../../assets/img/departamentos/ALVARADO 3D/Sala 2.JPG';
import bathroom3A from '../../../assets/img/departamentos/ALVARADO 3D/Baño.JPG';
import { Carousel, Container } from 'react-bootstrap';

const images = [
  {
    label: 'Somier 1 Plaza - Dormitorio 1',
    img:bedroom3A,
  },
  {
    label: 'Cama Matrimonial - Dormitorio 2',
    img: bedroom3A_2,
  },
  {
    label:'Cocina',
    img: kitchen3A,
  },
  {
    label: 'Cocina',
    img: kitchen3A_2,
  },
  {
    label: 'Sala Comedor',
    img: livingroom3A,
  },
  {
    label: 'Sala Comedor',
    img: livingroom3A_2,
  },
  {
    label: 'Baño',
    img: bathroom3A,
  }, 
]

const Carousel3A = () => (
<Container> 
  <Carousel>
    { images.map((step) => (
    <Carousel.Item key={step.img}>
      <img
        className="flex"
        src={step.img}
        alt="First slide"
        width='100%'
        height='600'
      />
      <Carousel.Caption>
        <h2>{ step.label }</h2>
      </Carousel.Caption>
    </Carousel.Item>
    ))}
  </Carousel>
</Container>
  );
export default Carousel3A;
