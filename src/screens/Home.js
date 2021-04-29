import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getCategoryList} from '../actions';
import List from '../components/List/List';

export default () => {
  const [isEnglishLanguage, setIsEnglishLanguage] = useState(true);
  const dispatch = useDispatch();
  const state = useSelector(state => state.categoryList);
  const {categoryList, isLoading} = state;

  useEffect(() => {
    dispatch(getCategoryList());
  }, []);

  return (
    <SafeAreaView>
      <List
        isEnglishLanguage={isEnglishLanguage}
        onPress={() => alert('Learn phrases about in this category')}
        data={categoryList && !isLoading && categoryList.categories}
        heading="Category List"
      />
    </SafeAreaView>
  );
};
