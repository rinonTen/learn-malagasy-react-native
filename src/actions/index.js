import {
  CATEGORY_LIST,
  SET_CATEGORYLIST_ID,
  SET_PHRASES,
  SEEN_PRASES,
  LEARNT_PHRASES,
} from '../constants';
import CategoryListData from '../data/categories.json';
import PhrasesData from '../data/phrases.json';

function getCategoryList() {
  return async dispatch => {
    dispatch({
      type: CATEGORY_LIST,
      payload: CategoryListData,
      isLoading: true,
    });
  };
}

function setPrases() {
  return async dispatch => {
    dispatch({
      type: SET_PHRASES,
      payload: PhrasesData.phrases,
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
    payload: phrases,
  };
}

function setCategoryId(idFromCategory) {
  return {
    type: SET_CATEGORYLIST_ID,
    payload: idFromCategory,
  };
}

export {
  getCategoryList,
  setSeenPrases,
  setPrases,
  setCategoryId,
  setLearntPrases,
};
