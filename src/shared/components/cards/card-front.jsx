import React from 'react';
import Card from './card';
import FaceCard from './face-card';

export default class CardFront extends React.Component {
  render() {
    const { id, suit, rank } = this.props;

    const name = `${rank.name} ${suit.name}`;

    const inner = (rank.value > 10 && rank.value < 14) ? <FaceCard suit={suit} rank={rank} /> : <Card suit={suit} />;

    return (
      <div className="card" id={id}>
        <div className={name}>
          <div className="corner top">
            <span className="number">{rank.symbol}</span>
            <span dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
          </div>
          {inner}
          <div className="corner bottom">
            <span className="number">{rank.symbol}</span>
            <span dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
          </div>
        </div>
      </div>
    )
  }
}
