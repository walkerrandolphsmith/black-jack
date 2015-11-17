import React from 'react';
import Deck from './cards/deck';
import Player from './player';
import Dealer from './dealer';
import MovesView from './moves';
import { bindActionCreators } from 'redux';
import * as MoveActions from './../actions/move';
import { connect } from 'react-redux';

@connect(state => ({ game: state.game }))

export default class Game extends React.Component {
  render() {
    const { game, dispatch } = this.props;
    const winner = game.activeGame ? "In Progress" : `Winner: ${game.winner.pid}`;

    const playerStyle = {
      height: '300'
    }

    return (
      <div id="game">
        State: {winner}
        <div className="player" style={playerStyle}>
          <Player player={game.player} {...bindActionCreators(MoveActions, dispatch)} />
        </div>
        <div className="player" style={playerStyle}>
          <Dealer player={game.dealer} {...bindActionCreators(MoveActions, dispatch)} />
        </div>
        <div className="footer">
          <MovesView canHit={game.player.canHit} {...bindActionCreators(MoveActions, dispatch)} />
        </div>
      </div>
    );
  }
}
