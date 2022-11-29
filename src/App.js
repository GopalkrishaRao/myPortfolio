import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Navbar/Home';
import Links from './Components/Navbar/Links';
import About from './Components/Navbar/About';
import Projects from './Components/Navbar/Projects';
import Contact from './Components/Navbar/Contact';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/links' element={<Links/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>

    </>
  );
}

export default App;
