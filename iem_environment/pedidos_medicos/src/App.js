import * as React from 'react';
//import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/structure/header/header';
import Footer from './components/structure/footer/footer';
import LoginHeader from './components/login/hLogin';
//import Login from './components/login/login';
//import TableDocente from './components/index/tableDocentes/tableDocente';
//import TitlePM from './components/index/titlePM/titlePM';
//import TitleNPM from './components/newpm/title/titleNpm';
//import NewPM from './components/newpm/newpm';
//import TableSearchPersonal from './components/newpm/searchpersonal/searchp';

function App() {
  return (
    <div className="App">
      <LoginHeader />
    </div>
     );
}

export default App;

