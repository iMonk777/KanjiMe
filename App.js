/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/components/Home';
import CharacterList from './src/components/Learning/CharacterList';
import KanjiDetailedView from './src/components/Learning/KanjiDetailedView';
import Credits from './src/components/Learning/Credits';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    CharacterList: CharacterList,
    KanjiDetailedView: KanjiDetailedView,
    Credits: Credits,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App: () => React$Node = () => {
  return <AppContainer />;
};

export default App;
