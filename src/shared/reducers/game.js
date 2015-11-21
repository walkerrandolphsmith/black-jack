import Immutable from 'immutable';
import _ from 'lodash';
import cards from './../constants/deck';
//const INITIAL_STATE = new Immutable.List();

const DEALER = 'dealer';
const PLAYER = 'player';

function cartesianProduct(){
  return _.reduce(arguments, (a, b) => {
      return _.flatten(_.map(a, x => {
          return _.map(b, (y, i) => {
            return {suit: x['rank'], rank: y};
          });
      }), false);
  }, [[]]);
}

function createPlayer(pid){
  return {
    pid: pid,
    hand: [],
    canHit: true,
    total: 0,
    score: 0
  };
}

const INITIAL_STATE = {
  player: createPlayer(PLAYER),
  dealer: createPlayer(DEALER),
  deck: cartesianProduct(cards.SUITS, cards.RANKS),
  activeGame: true,
  winner: false
};

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case 'HIT': return dealer(hit(PLAYER, state));
    case 'STAY': return dealer(stay(PLAYER, state));
    case 'RESET': return INITIAL_STATE;
  }
  return state;
}

function dealer(state) {
  const score = state.dealer.total;

  const bust = state.deck.reduce((x, y) => { return (score + y > 21) ? x + 1 : x; }, 0);
  const noBust = state.deck.length - bust;

  const opponentStayed = state.player.canHit;
  const hasMaxed = score >= 21;
  const hasAdvantage = !opponentStayed && score > state.player.total;
  const hasBadOdds = bust > noBust;

  if(hasMaxed || hasAdvantage || hasBadOdds){
    return stay(DEALER, state);
  }else {
    let newState = hit(DEALER, state);
    if(!opponentStayed && newState.dealer.total <= 21)
      newState = dealer(newState);
    return newState;
  }
}

function hit(playerId, state){
  let newDeck = _.difference(state.deck, state.player.hand);
  newDeck = _.difference(newDeck, state.dealer.hand);

  let newHand = _.union(state[playerId].hand, [_.sample(newDeck)]);
  let newTotal = _.sum(newHand, card => { return card.rank.value; });
  let newCanHit = state[playerId].canHit && newTotal < 21;

  let newScore = playerId === PLAYER ? newTotal : newTotal - newHand[0].rank.value;

  let player = {
    pid : playerId,
    hand : newHand,
    canHit : newCanHit,
    total : newTotal,
    score: newScore
  }

  let winner = playerId === PLAYER ? determineWinner(player, state.dealer) : determineWinner(state.player, player);

  return {
    player: playerId === PLAYER ? player : state.player,
    dealer: playerId === DEALER ? player : state.dealer,
    deck: newDeck,
    activeGame: isGameActive(playerId, state),
    winner: winner
  }
}

function stay(playerId, state){
  let player = {
    pid : playerId,
    hand : state[playerId].hand,
    canHit : false,
    total : state[playerId].total,
    score: state[playerId].score
  }

  return {
    player: playerId === PLAYER ? player : state.player,
    dealer: playerId === DEALER ? player : state.dealer,
    deck: state.deck,
    activeGame: isGameActive(playerId, state),
    winner: state.winner
  };
}

function isGameActive(playerId, state){
  return playerId === PLAYER ? state.dealer.canHit : state.player.canHit;
}

function determineWinner(p, d){
  let winner = null;
  if(p.total <= 21 && d.total <= 21)
    winner = p.total < d.total ? d : p;
  else if(p.total <= 21 && d.total >= 21)
    winner = p;
  else{
    winner = d;
  }
  return winner;
}
