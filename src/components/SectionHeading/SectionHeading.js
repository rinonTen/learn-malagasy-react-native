import * as React from 'react';
import { StyleSheet, SafeAreaView, Text} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    lineHeight: 22,
<<<<<<< HEAD
    fontWeight: "600",
=======
>>>>>>> Building a component and a storybook for the section heading
    color: "#111827"
  }
})
 
export default function NextButton({
  text
}) {
 
  return (
    <SafeAreaView>  
        <Text style={styles.text}>{text}</Text> 
    </SafeAreaView>
  );
}
