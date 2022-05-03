import bedroom3A from '../../../assets/img/departamentos/ALVARADO 3D/Dormitorio 1.jpg';
import bedroom3A_2 from '../../../assets/img/departamentos/ALVARADO 3D/Dormitorio 2.JPG';
import kitchen3A from '../../../assets/img/departamentos/ALVARADO 3D/Cocina 1.jpg';
import kitchen3A_2 from '../../../assets/img/departamentos/ALVARADO 3D/Cocina 2.JPG';
import livingroom3A from '../../../assets/img/departamentos/ALVARADO 3D/Sala.JPG';
import bathroom3A from '../../../assets/img/departamentos/ALVARADO 3D/Baño.jpg';
import { Carousel, Container } from 'react-bootstrap';

const images = [
  {
    label: 'Dormitorio Cama Matrimonial',
    img:bedroom3A,
  },
  {
    label: 'Dormitorio Sommier 1 Plaza',
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
        className="img-fluid"
        src={step.img}
        alt="First slide"
        width='100%'
        height='auto'
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
