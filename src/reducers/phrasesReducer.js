import {SET_PHRASES} from '../constants';

export const phrases = (state = {}, action) => {
  switch (action.type) {
    case SET_PHRASES:
      return {
        ...state,
        phrases: action.payload,
        learningPhrases: action.learningPhrases,
        isLoading: !action.isLoading,
      };
    default:
      return state;
  }
};