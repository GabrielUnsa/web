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
    label: 'Alvarado al 1400 - 8A',
    img: imgC1,
  },
  {
    label: 'Alvarado al 1400 - 8A',
    img: imgC2,
  },
  {
    label: 'Alvarado al 1400 - 2A',
    img: imgC3,
  },
  {
    label: 'Alvarado al 1400 - 2A',
    img: imgC4,
  },
  {
    label: 'Alvarado al 1400 - 3A',
    img: imgC5,
  },
  {
    label: 'Alvarado al 1400 - 3A',
    img: imgC6,
  },
  {
    label: 'Gorriti al 90 - 5D',
    img: imgC7,
  },
  {
    label: 'Gorriti al 90 - 5D',
    img: imgC8,
  },
];


const CarouselGallery = () => (
<div>
  <br />
  <br />
  <Carousel>
    { images.map((step) => (
    <Carousel.Item key={step.img}>
      <img
        className="flex"
        src={step.img}
        alt="First slide"
        width='60%'
        height='400'
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
