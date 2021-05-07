import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home/Home';
import LearningScreen from '../screens/LearningScreen/LearningScreen';

const Stack = createStackNavigator();

const CurrentListStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LearningScreen" component={LearningScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CurrentListStack;
