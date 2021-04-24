import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import ActionButton from './ActionButton';

function ActionButtonDefault() {  
  const [ isDisabled, setIsDisabled] = React.useState(false)
  return (
    <ActionButton  
      isDisabled={isDisabled} 
      onPress={() => alert("You pressed action button")}
      title="Learn" 
    />
  );
}

function ActionButtonCorrectAnswer() { 
  const [ isCorrect, setIsCorrect ] = React.useState(true);
  const [ isDisabled, setIsDisabled] = React.useState(true);

  return (
    <ActionButton 
      isDisabled={isDisabled} 
      isCorrect={isCorrect}
      onPress={() => alert("You pressed the action button")}
      title="Correct"
    />
  );
}

function ActionButtonWrongAnswer() { 
  const [ isCorrect, setIsCorrect ] = React.useState(false);
  const [ isDisabled, setIsDisabled] = React.useState(true)

  return (
    <ActionButton 
      isDisabled={isDisabled} 
      isCorrect={isCorrect}
      onPress={() => alert("You pressed the action button")}
      title="Wrong"
    />
  );
}

storiesOf('ActionButton', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('ActionButtonDefault', () => <ActionButtonDefault />)
  .add('ActionButtonCorrectAnswer', () => <ActionButtonCorrectAnswer/>)
  .add('ActionButtonWrongAnswer', () => <ActionButtonWrongAnswer/>);
  