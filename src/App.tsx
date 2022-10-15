import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Flex } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
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
