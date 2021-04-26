import * as React from 'react';
<<<<<<< HEAD
import {StyleSheet, SafeAreaView, TouchableOpacity, Text} from 'react-native';
=======
import { StyleSheet, SafeAreaView, TouchableOpacity, Text} from 'react-native';
>>>>>>> Resolving a conflict to make section heading component and storybook work

const styles = StyleSheet.create({
  button: {
    maxWidth: 90,
    height: 40,
    paddingTop: 8,
    borderColor: '#06B6D4',
    borderWidth: 1,
    borderRadius: 30,
  },
  enabledButton: {
    backgroundColor: '#06B6D4',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 19,
    color: '#ffffff',
    textAlign: 'center',
  },
  disabledButton: {
    backgroundColor: '#ffffff',
  },
  disabledButtonText: {
<<<<<<< HEAD
    color: '#06B6D4',
  },
});

export default function NextButton({title, isDisabled, onPress = () => null}) {
  // Conditions for the styling the button when it is disabled or not
  const buttonStyles = !isDisabled
    ? [styles.button, styles.enabledButton]
    : [styles.button, styles.disabledButton];
  const textStyles = !isDisabled
    ? [styles.buttonText, styles.enabledButtonText]
    : [styles.buttonText, styles.disabledButtonText];

=======
     color: "#06B6D4",
  }, 
})
 
export default function NextButton({
  title,  
  isDisabled, 
  onPress = () => null,
}) {
// Conditions for the styling the button when it is disabled or not
  const buttonStyles = !isDisabled ? [styles.button, styles.enabledButton]: [styles.button, styles.disabledButton];
  const textStyles = !isDisabled ? [styles.buttonText, styles.enabledButtonText]: [styles.buttonText, styles.disabledButtonText];
  
>>>>>>> Resolving a conflict to make section heading component and storybook work
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={buttonStyles}
        disabled={isDisabled}
        onPress={onPress}>
        <Text style={textStyles}>{title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
