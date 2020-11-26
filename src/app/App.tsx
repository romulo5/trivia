import React from 'react';
import 'styles/tailwind.output.css';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Quiz from 'pages/Quiz';
import Results from 'pages/Results';

const App = () => {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/quiz" component={Quiz} />
        <Route path="/results" component={Results} />
        <Route path="*" component={Error} />
      </Switch>
    </main>
  );
};

const Error = () => {
  return <h1>Oops</h1>;
};
export default App;
