import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import CategoryList from '../../data/categories.json';
import List from './List';

function CategoryListComponent() {
  const [isEnglishLanguage, setIsEnglishLanguage] = React.useState(true);
  return (
    <List
      isEnglishLanguage={isEnglishLanguage}
      onPress={() => alert('Learn phrases about in this category')}
      data={CategoryList.categories}
      heading="Category List"
    />
  );
}

storiesOf('List', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('List', () => <CategoryListComponent />);
