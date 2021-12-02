import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/Header';
import SignInAndSignup from './pages/signin-and-signup/SignInAndSignup';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  // const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   let unsubscribeFromAuth = null;
  //   unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
  //     setCurrentUser({ currentUser: user });
  //     console.log(user);

  //     return () => {
  //       unsubscribeFromAuth();
  //     };
  //   });
  // }, []);
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
