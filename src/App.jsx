import gsap from 'gsap';
import './App.css'
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <>
    <h1 className="text-blue-500">Hello, GSAP!</h1>
    </>
  );
}

export default App
