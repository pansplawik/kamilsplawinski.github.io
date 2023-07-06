import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarPage } from './components/navbar';
import { Educaiton } from './screens/education';
import { Experience } from './screens/experience';

function App() {

  return (
    <div className="App">
      <NavbarPage/>
      <header className="App-header">
      <div class="title">CV - Kamil Spławiński</div>
      <Educaiton/>
      <Experience/>
      <div></div>
      </header>
    </div>
  );
}

export default App;
