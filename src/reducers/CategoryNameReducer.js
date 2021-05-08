import {CATEGORY_NAME} from '../constants/ActionVariables';
export const categoryName = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_NAME:
      return {...state, categoryName: action.payload};
    default:
      return state;
  }
};
