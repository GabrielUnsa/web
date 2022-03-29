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

const CarouselGallery = () => (
<div>
  <Carousel>
    <Carousel.Item>
      <img
        className="flex"
        src={imgC2}
        alt="First slide"
        width='60%'
        height='400'
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</div>
);
export default CarouselGallery;
