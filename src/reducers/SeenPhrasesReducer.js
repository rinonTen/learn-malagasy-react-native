import {SEEN_PHRASES} from '../constants/ActionVariables';

export const seenPhrases = (state = [], action) => {
  switch (action.type) {
    case SEEN_PHRASES:
      return action.payload;
    default:
      return state;
  }
};
