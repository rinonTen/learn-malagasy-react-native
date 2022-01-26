import {
  CATEGORY_LIST,
  SET_CATEGORYLIST_ID,
  CATEGORY_NAME,
  LEARNING_SCREEN_DATA,
  LEARNING_SCREEN_LEARNT_PRASES,
  SET_PHRASES,
  SEEN_PHRASES,
  LEARNT_PHRASES,
} from '../constants/ActionVariables';
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

function setPhrases() {
  return async dispatch => {
    dispatch({
      type: SET_PHRASES,
      payload: PhrasesData.phrases,
      isLoading: true,
    });
  };
}
function setCategoryName(category) {
  return {
    type: CATEGORY_NAME,
    payload: category,
  };
}

function setLearningScreenData(phrasesArr) {
  return {
    type: LEARNING_SCREEN_DATA,
    payload: phrasesArr,
  };
}

function learningScreenDataLearntPhrases(phrasesArr) {
  return {
    type: LEARNING_SCREEN_LEARNT_PRASES,
    payload: phrasesArr,
  };
}

function setSeenPhrases(phrases) {
  return {
    type: SEEN_PHRASES,
    payload: phrases,
  };
}

function setLearntPhrases(phrases) {
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
  setCategoryId,
  setCategoryName,
  setPhrases,
  setLearningScreenData,
  learningScreenDataLearntPhrases,
  setSeenPhrases,
  setLearntPhrases,
};
