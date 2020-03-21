import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

import PopcornPage from './pages/PopcornPage';
import DrinksPage from './pages/DrinksPage';
import NavigationBar from './components/NavigationBar';
import SnacksPage from './pages/SnacksPage';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

class App extends Component {
  state = {
    showPages: false,
  }

 //function for hiding/showing the page 
showPagesToggler = () => {
  const doesShow = this.state.showPages;
  this.setState({showPages: !doesShow});
}

  render(){

    let pages = null;
    //if showPages = true; set pages = jsx;
    if (this.state.showPages){
      pages = (
        <div>
          <PopcornPage/>
          <DrinksPage/>
          <SnacksPage/>
        </div>  
      );
    }

    return(
      <div className = "App">

        <header>
          <NavigationBar />
        </header>

        <Button onClick={this.showPagesToggler}>Show Pages</Button>

        {pages}  
      </div>
    );
  }
}

export default App;
