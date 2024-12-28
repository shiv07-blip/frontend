import React, { Component, useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import './App.css'
import "./index.css";
import { LoginPage, SignupPage } from './routes/Routes';
import Home from './pages/home/Home';





function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/login' element = {<LoginPage/>}/>
        <Route path='/signup' element = {<SignupPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
