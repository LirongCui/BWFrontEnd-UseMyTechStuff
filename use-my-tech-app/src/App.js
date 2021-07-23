
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import LoginPage from './component/signup'
import Register from './component/register';

import Header from './component/header';

function App() {

  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path = '/register' component = {Register}/>
          {/* <Route exact path='/profile' component={Profile} /> */}
          <Route path='/login' component={LoginPage} />
          <Route component={LoginPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
