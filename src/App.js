import { useState } from 'react';
import NewGameForm from './js/components/NewGameForm';
import Scoreboard from './js/components/Scoreboard';

import { GAME_SESSION_TOKEN } from './js/utils/constants';
import { getLocalStorageWithExpiry } from './js/utils/localStorageUtils';

import './assets/styles/App.scss';

function App() {
  const [gameSession, setGameSession] = useState(getLocalStorageWithExpiry(GAME_SESSION_TOKEN));

  return (
    <div className="app">
      <div className="game-container">
        <img
          className="game-container__img"
          src="assets/img/arvolution-text-logo.png"
          alt="arvolution text logo"
        />
        <h2 className="game-container__header">
          Ping Pong Scorekeeper
        </h2>
        {
          gameSession !== null
          ? <Scoreboard />
          : <NewGameForm setGameSession={setGameSession} />
        }
      </div>
    </div>
  );
}

export default App;
