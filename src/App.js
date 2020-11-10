import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import Four from './components/Four';
import Colors from './components/Colors';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path ="/home"/>
        <Four path='/:id'/>
        <Colors path='/:id1/:id2/:id3'/>
      </Router>
    </div>
  );
}

export default App;