import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import CarouselGallery  from './components/carousel/carousel';
import CardsDepartament from './components/cards/cards';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselGallery />
      <CardsDepartament /> 
      < Footer/>
    </div>
  );
}

export default App;
