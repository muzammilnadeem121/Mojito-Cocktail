import gsap from 'gsap';
import './App.css'
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Cocktails from './components/Cocktails';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Cocktails></Cocktails>
    </main> 
  );
}

export default App
