import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInUpPage from './pages/sign-in-up/sign-in-up.component'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  unSubscribeFromAuth = null
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }
  
  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user)=>{
      this.setState({
        currentUser: user
      })
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SignInUpPage}></Route>
        </Switch>
      </div>
    );
  } 
}

export default App;
