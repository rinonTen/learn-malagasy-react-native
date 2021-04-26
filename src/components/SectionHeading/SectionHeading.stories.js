import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import SectionHeading from './SectionHeading';
 
storiesOf('SectionHeading', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('SectionHeadingWithShortPhrase', () => <SectionHeading text="Seen phrases:" />)
  .add('SectionHeadingWithLongPhrase', () => <SectionHeading text="Select a category from the category list:"/>)
   