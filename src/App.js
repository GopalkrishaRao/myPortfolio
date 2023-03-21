import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Foooter from './components/footer/Foooter';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Projects/>
    <About/>
    <Contact/>
    <Foooter/>
    </>
  );
}

export default App;
