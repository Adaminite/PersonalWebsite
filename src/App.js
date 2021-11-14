//import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home';
import ContactMe from './components/ContactMe';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import {BrowserRouter, Route} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">

        <Header/>
        <BrowserRouter>

          <Route path = "/" exact component = {Home}></Route>
          <Route path = "/About" exact component = {AboutMe}></Route>
          <Route path = "/Projects" exact component = {Projects}></Route>
          <Route path = "/Contact" exact component = {ContactMe}></Route>

        </BrowserRouter>
        

    {/*<Home/>*/}

    </div>
  );
}

export default App;
