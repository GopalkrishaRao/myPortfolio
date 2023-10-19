import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from "./components/ui_components/global_components/Navbar/Navbar";

import Home from './components/pages/home/Home';
// import Service from './components/pages/services/Service';
import Projects from './components/pages/projects/Projects';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Error from './components/pages/services/error/Error';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      {/* <Route path='/services' element={<Service/>}/> */}
      <Route exact path='/projects' element={<Projects/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route  path="*" element={<Error/>}/>
    </Routes>
    </>
  );
}

export default App;
