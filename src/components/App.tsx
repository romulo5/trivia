import React from 'react';
import '../styles/tailwind.output.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';
import Result from './Result';

const App = () => (
  <main>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/quiz" component={Quiz} />
      <Route path="/result" component={Result} />
    </Switch>
  </main>
);

export default App;
