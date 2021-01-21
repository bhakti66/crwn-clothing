import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInUpPage from './pages/sign-in-up/sign-in-up.component'
const HatsPage=()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/signin" component={SignInUpPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
