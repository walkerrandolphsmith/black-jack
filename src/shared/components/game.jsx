import React from 'react';
import Deck from './cards/deck';
import Player from './player';
import MovesView from './moves';
import { bindActionCreators } from 'redux';
import * as MoveActions from './../actions/move';
import { connect } from 'react-redux';

@connect(state => ({ game: state.game }))

export default class Game extends React.Component {
  render() {
    const { game, dispatch } = this.props;
    const winner = game.activeGame ? "In Progress" : `Winner: ${game.winner.pid}`;

    return (
      <div id="game">
        <div className="header">
          <h1> Black Jack </h1>
          <span>{winner}</span>
        </div>
        <div className="player">
          <Player player={game.player} isOpponent={false}/>
        </div>
        <div className="player">
          <Player player={game.dealer} isOpponent={true} />
        </div>
        <div className="footer">
          <MovesView canHit={game.player.canHit} {...bindActionCreators(MoveActions, dispatch)} />
        </div>
      </div>
    );
  }
}
