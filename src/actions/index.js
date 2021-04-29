import {CATEGORY_LIST} from '../constants';
import categoryList from '../data/categories.json';

function getCategoryList() {
  return async dispatch => {
    dispatch({
      type: CATEGORY_LIST,
      payload: categoryList,
      isLoading: true,
    });
  };
}

export {getCategoryList};
