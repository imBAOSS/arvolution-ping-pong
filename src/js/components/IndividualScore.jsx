import '../../assets/styles/components/IndividualScore.scss';

export default function IndividualScore({ playerRole, player, gameSession, setGameSession }) {
  function handleClick() {
    const updatedPlayer = {...player, score: player.score++};
    const updatedGameSession = {...gameSession, [playerRole]: updatedPlayer };

    setGameSession(updatedGameSession);
  }

  return (
    <div className="individual-score">
      <div className="individual-score__header">
        <span className="flex-2">{player.name}</span>
        <button className="flex-1 individual-score__btn" onClick={handleClick}>Add win</button>
      </div>
      <div className="individual-score__subheader">
        <span className="flex-2">Wins:</span>
        <span className="flex-1 individual-score__score">{player.score}</span>
      </div>
    </div>
  )
}