import gsap from 'gsap';
import './App.css'
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Cocktails from './components/Cocktails';
import About from './components/About';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Cocktails></Cocktails>
      <About></About>
    </main> 
  );
}

export default App
