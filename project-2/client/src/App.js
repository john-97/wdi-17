import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

// FILE IMPORTS
import Login from './components/Login/Login'
import MainApp from './components/App/App'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path="/LinkedUp" component={MainApp} />
        </Switch>
      </div>
    );
  }
}

export default App;
