import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

import './App.css';

class App extends Component {
  state = { users:[]}

  componentDidMount(){
    fetch("/users")
     .then(res=>res.json())
     .then(users=>this.setState({users}))
  }
 
  render() {
    return (
      <div className="App">
          <h1>Users</h1>
          <LazyLoad height={200} offset={100}>
          <ul>
            {this.state.users.map(user =>
              <li key={user.id}>{user.username}</li>
            )}
          </ul>      
          </LazyLoad>
      
      </div>
    );
  }
}

export default App;
