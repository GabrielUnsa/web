import Sala from '../../../assets/img/departamentos/GORRITI 8F/Sala.jpg';
import Dormitorio from '../../../assets/img/departamentos/GORRITI 8F/Dormitorio.jpg';
import Dormitorio_2 from '../../../assets/img/departamentos/GORRITI 8F/Dormitorio2.jpg';
import Balcon from '../../../assets/img/departamentos/GORRITI 8F/Balcon.jpg';
import { Carousel, Container } from 'react-bootstrap';

const images = [
  {
    label: 'Living',
    img:Sala,
  },
  {
    label: 'Dormitorio',
    img: Dormitorio,
  },
  {
    label:'Dormitorio',
    img: Dormitorio_2,
  },
  {
    label: 'Balcon',
    img: Balcon,
  },
]

const Carousel8F = () => (
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
export default Carousel8F;
