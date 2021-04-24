import * as React from 'react';
<<<<<<< HEAD
import { StyleSheet, SafeAreaView, TouchableOpacity, Text} from 'react-native';
=======
<<<<<<< HEAD
import { StyleSheet, SafeAreaView, TouchableOpacity, Text} from 'react-native';
=======
import { SafeAreaView, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
>>>>>>> Adding next button component with its story
>>>>>>> main

const styles = StyleSheet.create({
  button: { 
    maxWidth: 90,
    height: 40,
    paddingTop: 8,
    borderColor: "#06B6D4",
    borderWidth: 1,
    borderRadius: 30,
  },
  enabledButton: { 
    backgroundColor: "#06B6D4",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 19, 
    color: "#ffffff",
    textAlign: "center"
  }, 
  disabledButton: {
    backgroundColor: "#ffffff",
  },
  disabledButtonText: {
     color: "#06B6D4",
<<<<<<< HEAD
  }, 
=======
<<<<<<< HEAD
  }, 
=======
  },
  longTextButton: { 
    maxWidth: 100,
    paddingLeft: 10,
    paddingRight: 10,
  }
>>>>>>> Adding next button component with its story
>>>>>>> main
})
 
export default function NextButton({
  title,  
  isDisabled, 
  onPress = () => null,
}) {
<<<<<<< HEAD
// Conditions for the styling the button when it is disabled or not
=======
<<<<<<< HEAD
// Conditions for the styling the button when it is disabled or not
=======

>>>>>>> Adding next button component with its story
>>>>>>> main
  const buttonStyles = !isDisabled ? [styles.button, styles.enabledButton]: [styles.button, styles.disabledButton];
  const textStyles = !isDisabled ? [styles.buttonText, styles.enabledButtonText]: [styles.buttonText, styles.disabledButtonText];
  
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={buttonStyles}
        disabled={isDisabled}
        onPress={onPress} 
      >
        <Text style={textStyles}>{title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
