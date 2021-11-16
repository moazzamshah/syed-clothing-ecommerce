import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/Header';
import SignInAndSignup from './pages/signin-and-signup/SignInAndSignup';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
