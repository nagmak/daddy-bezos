import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Flex } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import BezosConfetti from './bezos-confetti';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BezosConfetti/>
        <Flex color='white' width="600px" height="800px">
          Wanna leave a tip?
        <Button w='100px' bg='green.500'>
          69%
        </Button>
        <Button bg='green.500' w='100px'>
          420%
        </Button>
        <Button w='100px' bg='green.500'>
          200%
        </Button>
      </Flex>
      </header>
    </div>
  );
}

export default App;
