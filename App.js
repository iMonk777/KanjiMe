/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/components/Home';
import CharacterList from './src/components/Learning/CharacterList';
import KanjiDetailedView from './src/components/Learning/KanjiDetailedView';
import Credits from './src/components/Learning/Credits';
import UserUITraining from './src/components/Learning/UserUITraining';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    CharacterList: CharacterList,
    KanjiDetailedView: KanjiDetailedView,
    Credits: Credits,
    UserUITraining: UserUITraining,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerShown: false,
      gestureEnabled: true,
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App: () => React$Node = () => {
  return (
    <View style={{flex: 1}}>
      <AppContainer />
    </View>
  );
};

export default App;
