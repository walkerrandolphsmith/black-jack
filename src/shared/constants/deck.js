const SUIT = {
  club: {
    name: 'club',
    symbol: '♣',
    color: 'black'
  },
  diamond: {
    name: 'diamond',
    symbol: '&diams;',
    color: 'red'
  },
  spade: {
    name: 'spade',
    symbol: '&spades;',
    color: 'black'
  },
  heart: {
    name: 'heart',
    symbol: '&hearts;',
    color: 'red'
  }
};

const RANK = {
  ace: {
    name: 'ace',
    symbol: 'A'
  },
  two: {
    name: 'two',
    symbol: '2'
  },
  three: {
    name: 'three',
    symbol: '3'
  },
  four: {
    name: 'four',
    symbol: '4'
  },
  five: {
    name: 'five',
    symbol: '5'
  },
  six: {
    name: 'six',
    symbol: '6'
  },
  seven: {
    name: 'seven',
    symbol: '7'
  },
  eight: {
    name: 'eight',
    symbol: '8'
  },
  nine: {
    name: 'nine',
    symbol: '9'
  },
  ten: {
    name: 'ten',
    symbol: '10'
  },
  jack: {
    name: 'jack',
    symbol: 'J'
  },
  queen: {
    name: 'queen',
    symbol: 'Q'
  },
  king: {
    name: 'king',
    symbol: 'K'
  }
};

const SUITS = [
  SUIT.club,
  SUIT.diamond,
  SUIT.spade,
  SUIT.heart
];

const RANKS = [
  RANK.ace,
  RANK.two,
  RANK.three,
  RANK.four,
  RANK.five,
  RANK.six,
  RANK.seven,
  RANK.eight,
  RANK.nine,
  RANK.ten,
  RANK.jack,
  RANK.queen,
  RANK.king
];

export default const PlayingCards = {
  RANK: RANK,
  SUIT: SUIT,
  RANKS: RANKS,
  SUITS: SUITS
};
