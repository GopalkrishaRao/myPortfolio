import './App.css';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Navbar from './Components/navbar/Navbar';
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
