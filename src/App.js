import Contact from './Components/Contact';
import Education from './Components/Education';
import FLoatingNav from './Components/FloatingNav';
import Icons from './Components/Icons';
import Landing from './Components/Landing';
import Skills from './Components/Skills';
import Work from './Components/Work';
import './style.css'

function App() {
  return (
    <div className="App">
      <FLoatingNav/>
      <Landing/>
      <Skills/>
      <Icons/>
      <Work/>
      <Education/>
      <Contact/>
    </div>
  );
}

export default App;
