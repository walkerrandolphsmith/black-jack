import React from 'react';
import Score from './score';
import Hand from './cards/hand';

export default class Player extends React.Component {
  render() {
    const { player, isOpponent } = this.props;

    let playerId = `player-${player.pid}`;

    return (
      <div id={playerId}>
        <Score score={player.score} />
        <Hand hand={player.hand} isOpponent={isOpponent} />
      </div>
    )
  }
}
