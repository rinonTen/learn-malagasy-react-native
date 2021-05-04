import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import ListItem from './ListItem';

storiesOf('ListItem', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('ListItem', () => (
    <ListItem
      text="Learn"
      categoryName="At the restaurant"
      onPress={() => alert('Learn about it!')}
    />
  ))
  .add('ListItemWIthLongCategoryName', () => (
    <ListItem
      text="Pick"
      categoryName="An unncessessarly loooong cat went to the marget to buy some medecine and cake"
      onPress={() => alert('Learn about it!')}
    />
  ));
