import React, { Component } from 'react';
import './App.css';

import PopcornPage from './pages/PopcornPage';
import DrinksPage from './pages/DrinksPage';
import NavigationBar from './components/NavigationBar';
import SnacksPage from './pages/SnacksPage';

class App extends Component {
  render(){
    return(
      <div className = "App">
        <header>
          <NavigationBar />
        </header>
        <PopcornPage/>
        <DrinksPage/>
        <SnacksPage/>
      </div>
    );
  }
}

export default App;
