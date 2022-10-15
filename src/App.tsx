import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Flex, Spacer } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import TippingScreen from './tipping-screen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TippingScreen/>
      </header>
    </div>
  );
}

export default App;
