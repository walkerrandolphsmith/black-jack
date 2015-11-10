import React from 'react';
import Hand from './hand';
import MovesView from './moves';

export default class Player extends React.Component {
  render() {
    const { game, dispatch } = this.props;

    let player = game.players[0];
    let playerId = `player-${player.pid}`;

    return (
      <div id="player">
        <div id={playerId}>
          <div>Total: {player.total}</div>
        </div>
        <MovesView canHit={player.canHit} hit={this.props.hit} stay={this.props.stay} />
        <Hand hand={player.hand} isOpponent={false} />
      </div>
    )
  }
}
