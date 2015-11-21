import React from 'react';

export default class Card extends React.Component {
  render() {
    const {suit, rank} = this.props;

    switch(rank.value){
      case 1:
        return (
          <div>
            <span className="suit middle_center" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
          </div>
        );
      break;

      case 2:
        return (
          <div>
            <span className="suit top_center" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit bottom_center" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
          </div>
        );
      break;

      case 3:
        return (
          <div>
            <span className="suit top_center" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit middle_center" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit bottom_center" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
          </div>
        );
      break;

      case 4:
        return (
          <div>
            <span className="suit top_left" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit top_right" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit bottom_left" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit bottom_right" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
          </div>
        );
      break;

      case 5:
        return (
          <div>
            <span className="suit top_left" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit top_right" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit middle_center" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit bottom_left" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit bottom_right" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
          </div>
        );
      break;

      case 6:
        return (
          <div>
            <span className="suit top_left" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit top_right" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit middle_left" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit middle_right" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit bottom_left" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit bottom_right" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
          </div>
        );
      break;

      case 7:
        return (
          <div>
            <span className="suit top_left" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit top_right" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit middle_top" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit middle_left" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit middle_right" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit bottom_left" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit bottom_right" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
          </div>
        );
      break;

      case 8:
        return (
          <div>
            <span className="suit top_left" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit top_right" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit middle_left" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit middle_top" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit middle_right" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit middle_bottom" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit bottom_left" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit bottom_right" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
          </div>
        );
      break;

      case 9:
        return (
          <div>
            <span className="suit top_left" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit top_right" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit middle_top_left" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit middle_center" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit middle_top_right" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit bottom_left" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit bottom_right" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit middle_bottom_left" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit middle_bottom_right" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
          </div>
        );
      break;

      case 10:
        return (
          <div>
            <span className="suit top_left" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit top_right" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit middle_top_left" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit middle_top_center" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit middle_top_right" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit bottom_left" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit bottom_right" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit middle_bottom_left" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit middle_bottom_center" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
            <span className="suit middle_bottom_right" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
          </div>
        );
      break;
    }
  }
}
