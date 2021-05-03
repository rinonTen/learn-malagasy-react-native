import {SET_CATEGORYLIST_ID} from '../constants';

export const categoryListId = (state = '', action) => {
  switch (action.type) {
    case SET_CATEGORYLIST_ID:
      return action.payload;
    default:
      return state;
  }
};
