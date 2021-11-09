import './App.css';
import HomePage from './components/page/homepage/HomePage.component';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Routes>
        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
