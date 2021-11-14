//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import ErrorPage from './components/ErrorPage';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className = "page-content">
          <Switch>
            <Route exact path = "/" component = {Home} >
              <Home/>
            </Route>

            <Route exact path = "/about" component = {About}>
              <About/>
            </Route>

            <Route exact path = "/contact" component = {Contact}>
              <Contact/>
            </Route>

            <Route exact path = "/projects" component = {Projects}>
              <Projects/>
            </Route>

            <Route component = {ErrorPage}>
              <ErrorPage/>
              </Route>

          </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;

