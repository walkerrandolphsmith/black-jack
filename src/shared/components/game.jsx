import React from 'react';
import Deck from './deck';
import Player from './player';
import { bindActionCreators } from 'redux';
import * as MoveActions from './../actions/move';
import { connect } from 'react-redux';

@connect(state => ({ game: state.game }))

export default class Game extends React.Component {
  render() {
    const { game, dispatch } = this.props;

    return (
      <div id="game">
        <div>Active Game: {game.activeGame ? 'true' : 'false'}</div>
        <Player game={game} {...bindActionCreators(MoveActions, dispatch)} />
      </div>
    );
  }
}
