import * as types from './../constants/action-types'

export function hit() {
  return { type: types.HIT, 'I hit!' }
}

export function stay() {
  return { type: types.STAY, 'I stay!' }
}
