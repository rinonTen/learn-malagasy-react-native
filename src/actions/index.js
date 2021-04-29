import {CATEGORY_LIST, SEEN_PRASES, LEARNT_PHRASES} from '../constants';
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

function setSeenPrases(phrases) {
  return {
    type: SEEN_PRASES,
    payload: phrases,
  };
}

function setLearntPrases(phrases) {
  return {
    type: LEARNT_PHRASES,
    payload: prases,
  };
}

export {getCategoryList, setSeenPrases, setLearntPrases};
