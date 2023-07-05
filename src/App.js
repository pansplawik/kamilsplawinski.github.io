import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarPage } from './components/navbar';
import { Educaiton } from './screens/education';

function App() {

  return (
    <div className="App">
      <NavbarPage/>
      <header className="App-header">
      <div class="title">CV - Kamil Spławiński</div>
      <Educaiton/>
      <div></div>
      </header>
    </div>
  );
}

export default App;
