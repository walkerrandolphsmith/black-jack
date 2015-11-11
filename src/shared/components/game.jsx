import React from 'react';
import Deck from './cards/deck';
import Player from './player';
import Dealer from './dealer';
import { bindActionCreators } from 'redux';
import * as MoveActions from './../actions/move';
import { connect } from 'react-redux';

@connect(state => ({ game: state.game }))

export default class Game extends React.Component {
  render() {
    const { game, dispatch } = this.props;

    return (
      <div id="game">
        <Player player={game.players[0]} {...bindActionCreators(MoveActions, dispatch)} />
        <Dealer player={game.players[1]} {...bindActionCreators(MoveActions, dispatch)} />
      </div>
    );
  }
}
