import './App.css';
import Navbar from './Components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Projects from './Components/projects/Projects';
import Contact from './Components/contact/Contact';


function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Projects/>
    <About/>
    <Contact/>
    </>
  );
}

export default App;
