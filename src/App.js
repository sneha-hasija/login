import logo from './logo.svg';
import './App.css';
import Login from './login';

import {Route,Switch} from 'react-router-dom';
import React, { Component } from 'react'
import Signup from './signup';
import Profile from './profile';

class App extends Component {



render(){
return (
  <>

  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
     <Switch>
<Route exact path='/signup' component={Signup}></Route>
<Route exact path='/login' component={Login}></Route>
<Route exact path='/profile' component={Profile}></Route>
</Switch>
    </header>
  </div>
  </>
)

  }}


export default App

