import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

import { Menu } from './components/Menu';
import { Play } from './components/Play';
import { About } from './components/About';
import { Settings } from './components/Settings/Settings';
import { EndGame } from './components/EndGame/EndGame';
import { HighScores } from './components/HighScores/HighScores';
import { GoToLevel } from './components/GoToLevel/GoToLevel';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Menu} />
        <Route exact path="/play" component={Play} />
        <Route exact path="/go-to-level" component={GoToLevel} />
        <Route exact path="/end-game" component={EndGame} />
        <Route exact path="/high-scores" component={HighScores} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
