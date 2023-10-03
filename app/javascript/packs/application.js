import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Greeting from '../components/Greeting';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Greeting} />
        {/* Add more routes if needed */}
      </Switch>
    </Router>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
