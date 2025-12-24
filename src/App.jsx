import gsap from 'gsap';
import './App.css'
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Cocktails></Cocktails>
      <About></About>
      <Art></Art>
      <Menu></Menu>
    </main> 
  );
}

export default App
