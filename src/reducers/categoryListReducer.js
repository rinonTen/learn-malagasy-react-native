import {CATEGORY_LIST} from '../constants';

const categoryList = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_LIST:
      return {
        ...state,
        categoryList: action.payload,
        isLoading: !action.isLoading,
      };
    default:
      return state;
  }
};
export default categoryList;
