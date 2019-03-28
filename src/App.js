import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <React.Fragment>
  <Route path='/' component = { Navigation } />
  <Route path='/' exact component = { Home } />
  <Route path='/about' component = { About } />
  <Route path='/contact' component = { Contact } />
  </React.Fragment>
);

export default App;
