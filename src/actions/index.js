import {CATEGORY_LIST} from '../constants';

function getCategoryList(list) {
  return {
    type: CATEGORY_LIST,
    payload: list,
    loading: true,
  };
}

export {};
