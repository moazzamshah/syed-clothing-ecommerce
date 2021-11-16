import './App.css';
import HomePage from './components/pages/homepage/HomePage.component';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './components/notFound/NotFound';
import ShopPage from './components/shop/Shop.component';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
