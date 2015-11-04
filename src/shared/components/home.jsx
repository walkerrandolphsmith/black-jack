import React from 'react';
import MovesView from './moves';
import { bindActionCreators } from 'redux';
import * as MoveActions from './../actions/move';
import { connect } from 'react-redux';

@connect(state => ({ moves: state.moves }))

export default class Home extends React.Component {
  render() {
    const { moves, dispatch } = this.props;
    debugger;
    return (
      <div id="hit-list">
        <MovesView moves={moves}
          {...bindActionCreators(MoveActions, dispatch)} />
      </div>
    );
  }
}
