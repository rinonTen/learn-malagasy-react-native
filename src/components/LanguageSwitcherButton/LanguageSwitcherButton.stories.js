import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import LanguageSwitcherButton from './LanguageSwitcherButton';

storiesOf('LanguageSwitcherButton', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('LanguageSwitcherButton', () => (
    <LanguageSwitcherButton
      onPress={() => alert('Switching between two languages')}
      textForEnglish="EN"
      textForMalagasy="MA"
    />
  ));
