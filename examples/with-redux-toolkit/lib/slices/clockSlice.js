import { createAction, createReducer } from '@reduxjs/toolkit';

/**
 * @param {boolean} light
 * @returns {Object}
 */
export const tick = createAction('clock/tick', function prepare(light) {
  return {
    payload: {
      light,
      lastUpdate: Date.now(),
    },
  };
});

const clockReducer = createReducer(
  {
    light: false,
    lastUpdate: 0,
  },
  {
    [tick]: (state, action) => {
      state.lastUpdate = action.payload.lastUpdate;
      state.light = !!action.payload.light;
    },
  },
);

export const selectClock = state => state.clock;

export default clockReducer;
