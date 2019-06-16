import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserRepo from './components/UserRepo';
import UserInfo from './components/UserInfo';
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
              <Route exact path="/" component={SearchUsers} />
              <Route exact path="/user/:username" render={props => (
                <React.Fragment>
                  <UserRepo {...props} />
                  <UserInfo {...props} />
                </React.Fragment>
              )} />
            </header>
          </div>
        </Provider>
      </Router>
    );
  }
}

const getStyle = {
  display: 'grid',
}

export default App;
