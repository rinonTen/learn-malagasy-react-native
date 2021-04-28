import {CATEGORY_LIST} from '../constants';

const categoryListReducer = (state = [], action) => {
  switch (action.type) {
    case CATEGORY_LIST:
      return action.payload;
    default:
      return state;
  }
};
export default categoryListReducer;
