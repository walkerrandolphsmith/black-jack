import * as types from './../constants/action-types'

export function hit() {
  return { type: types.HIT }
}

export function stay() {
  return { type: types.STAY }
}
