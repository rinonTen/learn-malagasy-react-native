import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import MyComponent from './myComponent';


storiesOf('Example', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('WithText', () => <MyComponent text= {'I am not sure'}/>)
  .add('WithNumber', () => <MyComponent number= {'1,3,4'} />)
 