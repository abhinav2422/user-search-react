import React, { Component } from 'react';
//import User from './components/User';
import SearchUsers from './components/SearchUsers';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <SearchUsers />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
