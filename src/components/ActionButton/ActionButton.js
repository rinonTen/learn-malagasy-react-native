import React from 'react'; 
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function ActionButton({title, onPress= () => {}}) {
  return (
    <SafeAreaView style={{flex: 1}}> 
        <TouchableOpacity
        onPress={onPress}
        >
            <Text>
                {title}
            </Text>
            <Image
                source={{
                uri:
                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
                }}
            /> 
        </TouchableOpacity>
    </SafeAreaView>
  )}