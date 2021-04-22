import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center",
    color: "rgba(17, 24, 39, 0.5)",
    backgroundColor: "#FFFFFF",
    borderColor: "#E5E5E5", 
    borderWidth: 1, 
    margin: 16,
    paddingTop: 41,
    paddingBottom: 34,
  }
});

export default function Example({
    placeholder, 
    containerStyle,
    inputStyle,
    editable,
    onChangeText= () => {},
    value,
    numberOfLines,
    multiline,
    placeholderTextColor
}) { 
 
  return (
      <View style={styles.container}> 
         <TextInput 
         style={styles.input}
            numberOfLines={numberOfLines}
            multiline={multiline}
            style={inputStyle}  
            placeholder={placeholder} 
            placeholderTextColor={placeholderTextColor}
            editable={editable}
            onChangeText={(text ) => onChangeText(text)}
            value={value}
          />
    </View>
  )
}