import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import NextButton from './NextButton';

function EnabledButton() { 
  return (
    <NextButton
      isDisabled={false}
      onPress={() => alert("You pressed next button")}
      title="Next" 
    />
  );
}

function DisabledButton() { 
  return (
    <NextButton 
      isDisabled={true} 
      title="Next"
    />
  );
}

function EnabledWidthLongTextButton() { 
  return (
    <NextButton
      isDisabled={false} 
      onPress={() => alert("You pressed next button")}
      title="Resuffle"
    />
  );
}

storiesOf('NextButton', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('NextButtonActive', () => <EnabledButton />)
  .add('NextButtonDisabled', () => (<DisabledButton/>))
  .add('NextButtonWithLongText', () => (<EnabledWidthLongTextButton/>))
  ;