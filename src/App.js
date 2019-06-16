import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import User from './components/User';
import SearchUsers from './components/SearchUsers';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <header className="App-header">
              <Route path="/" component={SearchUsers} />
            </header>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
