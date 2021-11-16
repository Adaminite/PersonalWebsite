import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import SideNavbar from './components/SideNavbar';
import Resume from './components/Resume';
import TopNavbar from './components/TopNavbar';

import Home from './components/Home';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return(
    <Router>
    <div className="App">
      <TopNavbar/>
      <Switch>
        <Route exact path = "/" component = {Home}>
          <Home/>
        </Route>

        <Route exact path = "/resume" component = {Resume}>
          <Resume/>
        </Route>
      </Switch>
    </div>
    </Router>
  )
}

export default App;

