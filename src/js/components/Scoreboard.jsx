import { useState } from 'react';

import IndividualScore from './IndividualScore';

import { GAME_SESSION_TOKEN } from '../utils/constants';
import { getLocalStorageWithExpiry, setLocalStorageWithExpiry } from '../utils/localStorageUtils';

import '../../assets/styles/components/Scoreboard.scss';

export default function Scoreboard() {
  const [gameSession, setGameSession] = useState(getLocalStorageWithExpiry(GAME_SESSION_TOKEN))
  let currentWinner;
  let winDifference;

  if (gameSession) {
    const { player1, player2 } = gameSession.gameSession;

    if (player1.score > player2.score) {
      currentWinner = player1.name;
    } else if (player1.score < player2.score) {
      currentWinner = player2.name;
    } else {
      currentWinner = "Tied";
    }

    winDifference = Math.abs(player1.score - player2.score);
  }

  const playerComponents = gameSession && Object.keys(gameSession.gameSession).map(
    (playerRole, i) =>
      <IndividualScore
        key={playerRole}
        playerRole={playerRole}
        player={gameSession.gameSession[playerRole]}
        gameSession={gameSession}
        setGameSession={setGameSession}
      />
  );;

  function handleSaveScores() {
    setLocalStorageWithExpiry(GAME_SESSION_TOKEN, gameSession.gameSession)
  }

  return (
    <div className="scoreboard">
      {playerComponents}
      <div className="scoreboard__current-winner">
        <span className="flex-2">Current winner:</span>
        <span className="flex-1">{currentWinner}</span>
      </div>
      <div className="scoreboard__win-difference">
        <span className="flex-2">Win difference:</span>
        <span className="flex-1">{winDifference}</span>
      </div>
      <button
        className="scoreboard__btn"
        onClick={handleSaveScores}
      >
        Save Game
      </button>
    </div>
  )
}