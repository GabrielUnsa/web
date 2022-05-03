import Sala from '../../../assets/img/departamentos/ALVARADO 2A/Sala 1.jpg';
import Sala_2 from '../../../assets/img/departamentos/ALVARADO 2A/Sala 2.jpg';
import Dormitorio from '../../../assets/img/departamentos/ALVARADO 2A/Dormitorio 1.jpg';
import Dormitorio_2 from '../../../assets/img/departamentos/ALVARADO 2A/Dormitorio 2.jpg';
import Dormitorio_3 from '../../../assets/img/departamentos/ALVARADO 2A/Dormitorio 3.jpg';
import Cocina from '../../../assets/img/departamentos/ALVARADO 2A/Cocina 1.JPG';
import Cocina_2 from '../../../assets/img/departamentos/ALVARADO 2A/Cocina 2.jpg';
import Cocina_3 from '../../../assets/img/departamentos/ALVARADO 2A/Cocina 3.jpg';
import Baño from '../../../assets/img/departamentos/ALVARADO 2A/Baño 1.jpg';
import Baño_2 from '../../../assets/img/departamentos/ALVARADO 2A/Baño 2.jpg';
import { Carousel, Container } from 'react-bootstrap';

const images = [
  {
    label: 'Living',
    img: Sala,
  },
  {
    label:'Living',
    img: Sala_2,
  },
  {
    label: 'Cama Matrimonial',
    img: Dormitorio,
  },
  {
    label: 'Cama Matrimonial',
    img: Dormitorio_2,
  },
  {
    label: 'Somier 1 Plaza',
    img: Dormitorio_3,
  },
  {
    label: 'Cocina',
    img: Cocina,
  }, 
  {
    label: 'Cocina',
    img: Cocina_2,
  },
  {
    label: 'Cocina',
    img: Cocina_3,
  },
  {
    label: 'Baño',
    img: Baño,
  },
  {
    label: 'Baño',
    img: Baño_2,
  },
]

const Carousel2A = () => (
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
export default Carousel2A;
