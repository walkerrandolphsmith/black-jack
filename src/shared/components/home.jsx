import React from 'react';
import MovesListView from './moveslist';
import MovesView from './moves';
import { bindActionCreators } from 'redux';
import * as MoveActions from './../actions/move';
import { connect } from 'react-redux';

@connect(state => ({ moves: state.moves }))

export default class Home extends React.Component {
  render() {
    const { moves, dispatch } = this.props;

    return (
      <div id="hit-list">
        <MovesListView moves={moves} {...bindActionCreators(MoveActions, dispatch)} />
        <MovesView {...bindActionCreators(MoveActions, dispatch)} />
      </div>
    );
  }
}
