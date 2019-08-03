import React from 'react';
import './App.css';
import CharacterGrid from './components/CharacterGrid.js'
import {Container, Header} from 'semantic-ui-react'


// https://swapi.co/api/people

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <Container className="App">
      <Header className="Header" style ={{fontSize: '3rem'}}>React Wars</Header>
      <CharacterGrid />
    </Container>
  );
}

export default App;
