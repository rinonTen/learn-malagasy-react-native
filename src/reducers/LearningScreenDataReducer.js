import {
  CATEGORY_NAME,
  LEARNING_SCREEN_DATA,
  LEARNING_SCREEN_LEARNT_PRASES,
} from '../constants/ActionVariables';

export const leaningSreenData = (state = [], action) => {
  switch (action.type) {
    case LEARNING_SCREEN_DATA:
      return action.payload;
    default:
      return state;
  }
};
