import React from 'react';

export default class Card extends React.Component {
  render() {
    const { id, suit, rank } = this.props;

    const name = `${rank.name} ${suit.name}`;

    let guts;
    switch(rank.name){
      case 'king':
      case 'queen':
      case 'jack':
        let src = `assets/img/faces/face-${rank.name}-${suit.name}.png`;
        guts = (
          <span className="face middle_center">
            <img src={src} />
          </span>
        )
        break;
      default: guts = (
        <div>
          <span className="suit top_center" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
          <span className="suit middle_center" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
          <span className="suit bottom_center" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
        </div>
      )
    }

    return (
      <div className="card" id={id}>
        <div className={name}>
          <div className="corner top">
            <span className="number">{rank.symbol}</span>
            <span dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
          </div>
          {guts}
          <div className="corner bottom">
            <span className="number">{rank.symbol}</span>
            <span dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
          </div>
        </div>
      </div>
    )
  }
}
