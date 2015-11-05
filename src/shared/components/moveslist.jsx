import React from 'react';

export default class Moves extends React.Component {
  render() {
    let moves = this.props.moves.map((e, i) => {
      return (
        <div key={i}>{e}</div>
      )
    });
    return (
      <div id="moves-list">
        {moves}
      </div>
    )
  }
}
