import { Carousel  } from 'react-bootstrap';
import imgC1 from '../../assets/img/coursel/8A_1.jpg';
import imgC2 from '../../assets/img/coursel/8A_2.jpg';
import imgC3 from '../../assets/img/coursel/Alvarado2A_1.jpg';
import imgC4 from '../../assets/img/coursel/Alvarado2A_2.jpg';
import imgC5 from '../../assets/img/coursel/Alvarado3A_1.jpg';
import imgC6 from '../../assets/img/coursel/Alvarado3A_2.jpg';
import imgC7 from '../../assets/img/coursel/Gorriti5D_1.jpg';
import imgC8 from '../../assets/img/coursel/Gorriti5D_2.jpg';
import './carousel.css';

const images = [
  {
    label: 'Gorriti 1',
    img: imgC7,
  },
  {
    label: 'Gorriti 1',
    img: imgC8,
  },
  {
    label: 'Gorriti 3',
    img: imgC1,
  },
  {
    label: 'Gorriti 3',
    img: imgC2,
  },
  {
    label: 'Alvarado 1',
    img: imgC5,
  },
  {
    label: 'Alvarado 1',
    img: imgC6,
  },
  {
    label: 'Alvarado 2',
    img: imgC3,
  },
  {
    label: 'Alvarado 2',
    img: imgC4,
  },
];


const CarouselGallery = () => (
<div>

  <Carousel>
    { images.map((step) => (
    <Carousel.Item key={step.img}>
      <img
        className="flex"
        src={step.img}
        alt="First slide"
        width='55%'
        height='600'
      />
      <Carousel.Caption>
        <h4> {step.label} </h4>
      </Carousel.Caption>
    </Carousel.Item>
    ))}
  </Carousel>
  <br />
</div>
);
export default CarouselGallery;
