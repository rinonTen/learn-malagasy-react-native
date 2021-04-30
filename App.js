/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import configureStore from './store';
const store = configureStore();

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
