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
    label: '8A_1',
    imgPath: imgC1,
  },
  {
    label: '8A_2',
    imgPath: imgC2,
  },
  {
    label: 'Alvarado2A_1',
    imgPath: imgC3,
  },
  {
    label: 'Alvarado2A_2',
    imgPath: imgC4,
  },
  {
    label: 'Alvarado3A_1',
    imgPath: imgC5,
  },
  {
    label: 'Alvarado3A_2',
    imgPath: imgC6,
  },
  {
    label: 'Gorriti5D_1',
    imgPath: imgC7,
  },
  {
    label: 'Gorriti5D_2',
    imgPath: imgC8,
  },
];


const CarouselGallery = () => (
<div>
  <br />
  <Carousel>
    { images.map((step) => (
    <Carousel.Item>
      <img
        className="flex"
        src={step.imgPath}
        alt="First slide"
        width='60%'
        height='400'
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    ))}
  </Carousel>
  <br />
  
</div>
);
export default CarouselGallery;
