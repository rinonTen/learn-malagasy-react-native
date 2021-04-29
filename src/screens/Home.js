import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getCategoryList} from '../actions';
import HomeHeader from './HomeHeader';
import List from '../components/List/List';
import GlobalStyles from '../constants/GlobalStyles';

export default () => {
  const [isEnglishLanguage, setIsEnglishLanguage] = useState(true);
  const dispatch = useDispatch();
  const state = useSelector(state => state.categoryList);
  const {categoryList, isLoading} = state;

  useEffect(() => {
    dispatch(getCategoryList());
  }, []);

  return (
    <SafeAreaView style={GlobalStyles.screen}>
      <ScrollView>
        <View style={GlobalStyles.container}>
          <HomeHeader
            switchLanguage={() => setIsEnglishLanguage(!isEnglishLanguage)}
          />
          <List
            isEnglishLanguage={isEnglishLanguage}
            onPress={() => alert('Learn phrases about in this category')}
            data={categoryList && !isLoading && categoryList.categories}
            heading="Category List"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
