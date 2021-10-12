import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';
import FriendsForm from './components/FriendsForm';

function App() {
  let isLoggedIn = localStorage.getItem("token");

  return (
    <Router>
    <div className="App">
      <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
            <Link to="/logout">Logout</Link>
            </li>
            <li>
              {/* {isLoggedIn ? <Link to="/protected">Protected Page</Link> : <div></div>} */}
              { isLoggedIn && <Link to="/protected">Protected Page</Link> }
            </li>
            <li>
              <Link to="/friendsform">Add Friend</Link>
            </li>
      </ul>
      <Switch>
          <PrivateRoute exact path="/friendsform" component={FriendsForm} />
          <PrivateRoute exact path="/protected" component={Friends} />
          <PrivateRoute path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />    
        </Switch>

    </div>

    </Router>
    
  );
}

export default App;