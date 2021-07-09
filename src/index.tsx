// Packages
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';

// Parts
import { Store } from './store';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Containers
import Main from "./containers/Main";
import Home from "./containers/Home";
import Quiz from "./containers/Quiz";

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Main>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/quiz" component={Quiz} />
        </Switch>
      </Main>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
