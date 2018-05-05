import React, { Component } from 'react';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Home from './containers/Home';
import rootReducer from './reducers';

class App extends Component {
  render() {
    const store = createStore(rootReducer);

    return (
      <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            
            <h1 className="App-title">Welcome to Docs</h1>
          </header>
          <Route exact path="/" component={Home} />
          <Route path="/doc/:filename" component={Home} />
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
