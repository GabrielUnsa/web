import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
//import LoginHeader from './components/login/hLogin';
//import Login from './components/login/login';
//import TableDocente from './components/index/tableDocentes/tableDocente';
//import TitlePM from './components/index/titlePM/titlePM';
import TitleNPM from './components/newpm/titleNPM';
//import NewPM from './components/newpm/newpm';
//import TableSearchPersonal from './components/newpm/searchpersonal/searchp';

function App() {
  return (
    <div>
      <Header />
      <TitleNPM />
      
      <Footer />
    </div>
     );
}

export default App;
