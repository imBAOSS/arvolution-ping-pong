import { useState } from 'react';

import { GAME_SESSION_TOKEN } from '../utils/constants';
import { setLocalStorageWithExpiry } from '../utils/localStorageUtils';

import '../../assets/styles/components/NewGameForm.scss';

export default function NewGameForm({ setGameSession }) {
  const [playerData, setPlayerData] = useState({
    player1: { name: '', score: 0},
    player2: { name: '', score: 0}
  });
  
  function handleSubmit(e) {
    e.preventDefault();
    
    const { player1, player2 } = playerData;

    if (player1.name.length > 0 && player2.name.length > 0) {
      // Stores new game session in localStorage
      const newGameSession = setLocalStorageWithExpiry(
        GAME_SESSION_TOKEN,
        playerData
      )
  
      // Updates gameSession to render Scoreboard
      setGameSession(newGameSession);
    } else {
      alert('Please enter player names before continuing');
    }
  }

  function handleNameChange(player, e) {
    const updatedPlayerData = {...playerData[player], name: e.target.value}
    const updatedGameSessionData = {...playerData, [player]: updatedPlayerData};

    setPlayerData(updatedGameSessionData);
  }
  
  return (
    <form className="new-game-form" onSubmit={handleSubmit}>
      <label className="new-game-form__label">
        Player 1 Name
        <input
          type="text"
          value={playerData.player1.name}
          onChange={(e) => handleNameChange('player1', e)}
          placeholder="Enter your name..."
        />
      </label>
      <label className="new-game-form__label">
        Player 2 name
        <input
          type="text"
          value={playerData.player2.name}
          onChange={(e) => handleNameChange('player2', e)}
          placeholder="Enter your name..."
        />
      </label>

      <button className="new-game-form__btn" type="submit">
        Continue
        <i className="fas fa-caret-right"></i>
      </button>
    </form>
  )
}