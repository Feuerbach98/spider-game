import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './components/Menu';
import Play from './components/Play';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Menu} />
          <Route exact path="/play" component={Play} />
        </div>
      </Router>
    </div>
  );
}

export default App;
