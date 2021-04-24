import * as React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import LanguageSwitcherIcon from './icons/languageSwitcherButton';

const styles = StyleSheet.create({
  button: { 
    maxWidth: 90,
    height: 40,
    paddingTop: 8,
    backgroundColor: "#06B6D4",
    borderColor: "#06B6D4",
    borderWidth: 1,
    borderRadius: 30,
  }, 
  text: {
      color: "#FFFFFF",
  }
})
 
export default function NextButton({
  textForEnglish,
  textForMalagasy,
  onPress = () => null,
}) {
 
  return (
    <SafeAreaView>
      <TouchableOpacity 
        onPress={onPress} 
      >
        <Text style={styles.text}>{textForEnglish}</Text>
        <LanguageSwitcherIcon />
        <Text style={styles.text}>{textForMalagasy}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
