import './App.css';

import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

function App() {

  return(
    <div className="App">
      <div id = "side-nav">
        <Navbar/>
      </div>
      <div id = "content">
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App;

