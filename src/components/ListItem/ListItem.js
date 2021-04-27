import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ActionButton from '../ActionButton/ActionButton';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    color: '#111827',
  },
  buttonContainer: {
    marginTop: 2,
  },
});

export default function ListItemComponent({categoryName, onPress = () => {}}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{categoryName}</Text>
      <View style={styles.buttonContainer}>
        <ActionButton isDisabled={false} onPress={onPress} title="Learn" />
      </View>
    </SafeAreaView>
  );
}
