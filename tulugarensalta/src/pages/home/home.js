import Header from '../../components/header/header';
import CarouselGallery from '../../components/carousel/carousel';
import CardsDepartament from '../../components/cards/cards';
import ServiceGrid from '../../components/services/serviceGrid';
import Contacts from '../../components/contacts/contacts';

export default function Home(){
  return(
    <div>
      <Header />      
      <br />
      <br />
      <br />
      <CarouselGallery />
      <CardsDepartament />
      <ServiceGrid />
      <Contacts />
    </div>
  );
}
