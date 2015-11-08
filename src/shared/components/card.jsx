import React from 'react';

export default class Card extends React.Component {
  render() {
    const { id, suit, rank } = this.props;

    const name = `${rank.name} ${suit.name}`;

    return (
      <div className="card" id={id}>
        <div className={name}>
          <div className="corner top">
            <span className="number">{rank.symbol}</span>
            <span dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
          </div>
          <span className="suit top_center" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
          <span className="suit middle_center" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
          <span className="suit bottom_center" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
          <div className="corner bottom">
            <span className="number">{rank.symbol}</span>
            <span dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
          </div>
        </div>
      </div>
    )
  }
}
