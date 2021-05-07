import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import CorrectAnswerIcon from '../../assets/icons/correctAnswerIcon.svg';
import WrongAnswerIcon from '../../assets/icons/wrongAnswerIcon.svg';
import RightArrowIcon from '../../assets/icons/rightArrowIcon.svg';

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19,
    marginTop: -3,
    marginRight: 10,
  },
  blueText: {
    color: '#06B6D4',
  },
  greenText: {
    color: '#06D440',
  },
  redText: {
    color: '#D4068E',
  },
});
export default function ActionButton({
  title,
  onPress = () => {},
  isCorrect,
  isIncorrect,
  isDisabled,
}) {
  let buttonIcon;
  let textStyles;
  let buttonText;

  if (isCorrect) {
    buttonIcon = <CorrectAnswerIcon />;
    textStyles = [styles.greenText, styles.text];
    buttonText = 'Correct';
  } else if (isIncorrect) {
    buttonIcon = <WrongAnswerIcon />;
    textStyles = [styles.redText, styles.text];
    buttonText = 'Wrong';
  } else {
    buttonIcon = <RightArrowIcon />;
    textStyles = [styles.blueText, styles.text];
    // Pass the props
    buttonText = title;
  }

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={onPress}
        disabled={isDisabled}
        style={styles.button}>
        <Text style={textStyles}>{buttonText}</Text>
        {buttonIcon}
      </TouchableOpacity>
    </SafeAreaView>
  );
}
