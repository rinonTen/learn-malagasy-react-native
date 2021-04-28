import * as React from 'react';
import {StyleSheet, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import LanguageSwitcherIcon from '../../assets/icons/languageSwitcherIcon.svg';

const styles = StyleSheet.create({
  button: {
    maxWidth: 90,
    height: 40,
    paddingTop: 8,
    backgroundColor: '#06B6D4',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: '#06B6D4',
    paddingTop: 11,
    borderWidth: 1,
    borderRadius: 30,
  },
  text: {
    fontSize: 13,
    lineHeight: 16,
    color: '#FFFFFF',
  },

  icon: {
    marginLeft: 6,
    marginRight: 6,
  },
});

export default function NextButton({
  textForEnglish,
  textForMalagasy,
  onPress = () => null,
}) {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{textForEnglish}</Text>
        <LanguageSwitcherIcon style={styles.icon} />
        <Text style={styles.text}>{textForMalagasy}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
