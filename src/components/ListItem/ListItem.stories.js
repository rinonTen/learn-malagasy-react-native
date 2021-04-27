import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import ListItem from './ListItem';

storiesOf('ListItem', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('ListItem', () => <ListItem text="Seen phrases:" />)
  .add('ListItemWIthLongCategoryName', () => (
    <SectionHeading text="Select a category from the category list:" />
  ));
