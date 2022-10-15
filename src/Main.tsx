import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TippingScreen from './tipping-screen';
import BezosConfetti from './bezos-confetti';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/' element={<TippingScreen/>}></Route>
      <Route path='/bezos' element={<BezosConfetti/>}></Route>
    </Routes>
  );
}

export default Main;