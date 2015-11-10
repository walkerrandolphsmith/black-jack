const SUIT = {
  club: {
    name: 'club',
    symbol: '&#9827;',
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
    symbol: 'A',
    value: 14
  },
  two: {
    name: 'two',
    symbol: '2',
    value: 2
  },
  three: {
    name: 'three',
    symbol: '3',
    value: 3
  },
  four: {
    name: 'four',
    symbol: '4',
    value: 4
  },
  five: {
    name: 'five',
    symbol: '5',
    value: 5
  },
  six: {
    name: 'six',
    symbol: '6',
    value: 6
  },
  seven: {
    name: 'seven',
    symbol: '7',
    value: 7
  },
  eight: {
    name: 'eight',
    symbol: '8',
    value: 8
  },
  nine: {
    name: 'nine',
    symbol: '9',
    value: 9
  },
  ten: {
    name: 'ten',
    symbol: '10',
    value: 10
  },
  jack: {
    name: 'jack',
    symbol: 'J',
    value: 11
  },
  queen: {
    name: 'queen',
    symbol: 'Q',
    value: 12
  },
  king: {
    name: 'king',
    symbol: 'K',
    value: 13
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

const PlayingCards = {
  RANK: RANK,
  SUIT: SUIT,
  RANKS: RANKS,
  SUITS: SUITS
};

export default PlayingCards;
