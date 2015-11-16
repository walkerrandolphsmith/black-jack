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
    total: 0
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

  let player = {
    pid : playerId,
    hand : newHand,
    canHit : newCanHit,
    total : newTotal
  }

  return {
    player: playerId === PLAYER ? player : state.player,
    dealer: playerId === DEALER ? player : state.dealer,
    deck: newDeck,
    activeGame: isGameActive(playerId, state),
    winner: determineWinner(state.player, state.dealer)
  }
}

function stay(playerId, state){
  let player = {
    pid : playerId,
    hand : state[playerId].hand,
    canHit : false,
    total : state[playerId].total
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

function determineWinner(p1, p2){
  let winner = null;
  if(p1.total > 21){
    if(p2.total <= 21){
      winner = p2;
    }else{
      winner = p1.total < p2.total ? p1 : p2;
    }
  }else{
    if(p2.total > 21){
      winner = p1;
    }else {
      winner = p1.total < p2.total ? p2 : p1;
    }
  }
  return winner;
}
