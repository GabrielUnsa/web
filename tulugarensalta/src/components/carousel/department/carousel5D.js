import Sala from '../../../assets/img/departamentos/GORRITI 5D/Sala 1.jpg';
import Sala_2 from '../../../assets/img/departamentos/GORRITI 5D/Sala 2.jpg';
import Dormitorio from '../../../assets/img/departamentos/GORRITI 5D/Dormitorio.JPG';
import Dormitorio_2 from '../../../assets/img/departamentos/GORRITI 5D/Dormitorio 2.jpg';
import Cocina from '../../../assets/img/departamentos/GORRITI 5D/Cocina.JPG';
import Cocina_2 from '../../../assets/img/departamentos/GORRITI 5D/Cocina2.jpg';
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
    label: 'Cocina',
    img: Cocina,
  }, 
  {
    label: 'Cocina',
    img: Cocina_2,
  },
]

const Carousel5D = () => (
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
export default Carousel5D;
