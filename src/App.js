import React from 'react';

import spiderImg from './images/spider.svg';
import flyImg from './images/fly.png';

import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>Score: <span class="score">0</span></h1>
      <div class="wall">
        <img
          src={flyImg}
          class="fly"
          alt="fly"
        />
        <img
          src={spiderImg}
          class="spider"
          alt="spider"
        />
      </div>
      <p>Use arrows to play</p>
    </div>
  );
}

export default App;
