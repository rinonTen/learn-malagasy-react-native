// components/Task.js
import * as React from 'react';
import { Text, SafeAreaView } from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function MyComponent({text, number}) {
 
  return (
    <SafeAreaView >
      <Text>{text}</Text>
      <Text>{number}</Text> 
    </SafeAreaView>
  );
}