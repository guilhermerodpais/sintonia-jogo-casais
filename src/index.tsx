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
import About from "./containers/About";
import Contact from "./containers/Contact";

// Styles
import './assets/css/overwrite.css'
import './assets/fonts/Vidaloka-Regular.ttf';
import './assets/fonts/Raleway-VariableFont_wght.ttf';
import './assets/fonts/Marcellus-Regular.ttf';

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Main>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/quiz" component={Quiz} />
          <Route path="/sobre" component={About} />
          <Route path="/contato" component={Contact} />
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
