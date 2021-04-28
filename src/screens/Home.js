import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import List from '../components/List/List';
import CategoryList from '../data/categories.json';

export default () => {
  const [isEnglishLanguage, setIsEnglishLanguage] = useState(true);

  return (
    <SafeAreaView>
      <List
        isEnglishLanguage={isEnglishLanguage}
        onPress={() => alert('Learn phrases about in this category')}
        data={CategoryList.categories}
        heading="Category List"
      />
    </SafeAreaView>
  );
};
