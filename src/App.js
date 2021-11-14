import './App.css';
import HomePage from './components/pages/homepage/HomePage.component';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './components/notFound/NotFound';


const HatPage =(props) => {
  console.log(props)
  return (
    <div>
      <h1> Hats Page </h1>
      <button onClick={() => props.history.goBack()}> Go back </button>
    </div>
  );

}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatPage} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
