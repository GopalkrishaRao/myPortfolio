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
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
