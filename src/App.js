import React from 'react';
import logo from './logo.svg';
import './App.css';

import { 
  BrowserRouter as Router, 
  Route,
  Switch 
} from 'react-router-dom';



import Homepage from './components/Homepage';
import Menu from './components/Menu';
import Orders from './components/Orders';
import Cart from './components/Cart';
import Header from './layout/Header';





function App() {
  return (
    <Router>
    <div className="App">

      <Header/>
      <div className="container pt-4">
        <Switch> 
          <Route exact path='/' component={Homepage}></Route> 

          <Route exact path='/Homepage' component={Homepage}></Route> 
          <Route exact path='/Menu' component={Menu}></Route> 
          <Route exact path='/Orders' component={Orders}></Route> 
          <Route exact path='/Cart' component={Cart}></Route>
          
        </Switch> 
        </div>

    </div>
    </Router>
  );
}

export default App;
