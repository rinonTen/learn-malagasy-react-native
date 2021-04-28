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
  isDisabled,
}) {
  let buttonIcon;
  let textStyles;

  if (isCorrect) {
    buttonIcon = <CorrectAnswerIcon />;
    textStyles = [styles.greenText, styles.text];
  } else if (!isCorrect && isDisabled) {
    buttonIcon = <WrongAnswerIcon />;
    textStyles = [styles.redText, styles.text];
  } else {
    buttonIcon = <RightArrowIcon />;
    textStyles = [styles.blueText, styles.text];
  }

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={onPress}
        disabled={isDisabled}
        style={styles.button}
        isCorrect={isCorrect}>
        <Text style={textStyles}>{title}</Text>
        {buttonIcon}
      </TouchableOpacity>
    </SafeAreaView>
  );
}
