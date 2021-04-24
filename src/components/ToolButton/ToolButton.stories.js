import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import ToolButton from './ToolButton';
 
storiesOf('ToolButton', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('ToolButtonPlusIcon', () => <ToolButton icon="plusIcon" onPress={() => alert("You pressed tool button")} />)
  .add('ToolButtonDoubleTickedIcon', () => <ToolButton icon="doubleTickedIcon" onPress={() => alert("You pressed tool button")} />)
  .add('ToolButtonTickedIcon', () => <ToolButton icon="tickedIcon" onPress={() => alert("You pressed tool button")} />)
  .add('ToolButtonArrowLeftIcon', () => <ToolButton icon="arrowLeftIcon" onPress={() => alert("You pressed tool button")} />)
  .add('ToolButtonSettingIcon', () => <ToolButton icon="settingIcon" onPress={() => alert("You pressed tool button")} />)
   