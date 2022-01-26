import React, { Fragment } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Main';
import Login from './layout/auth/Login';
import Signup from './layout/auth/Signup';

function App() {
  return (
    <Router>
    <Fragment>
      <Routes>
      <Route exact path='/' element={<Main/>}/>
      <Route exact path='/auth/login' element={<Login/>}/>
      <Route exact path='/auth/register' element={<Signup/>}/>
      </Routes>
   </Fragment>
   </Router>
  );
}

export default App;
