import * as React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 15,
  },
});

export default function NextButton({text}) {
  return (
    <SafeAreaView>
      <Text style={styles.text}>{text}</Text>
    </SafeAreaView>
  );
}
