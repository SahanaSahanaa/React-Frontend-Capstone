import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage'

function App() {
  return (
    <>
      <NavBar />
      <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
    </Routes>
    </>
  );
}

export default App;
