import {defaultCharacterGroups} from './defaultCharacterGroups';
import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';

export const initData = () => {
  for (let i = 0; i < defaultCharacterGroups.length; i++) {
    let characterGroupData = defaultCharacterGroups[i].characters;
    let characterGroupName = defaultCharacterGroups[i].groupName;
    AsyncStorage.setItem(
      characterGroupName,
      JSON.stringify(characterGroupData),
    );
    console.warn('Data stored succesfully');
  }
  AsyncStorage.setItem('dataIsStored', 'true');
  console.warn('dataIsStored flag was set to true');
};
// initData();
export const getData = async group => {
  try {
    let fetchedGroupData = await AsyncStorage.getItem(group);
    let parsedGroupData = JSON.parse(fetchedGroupData);
    console.warn(parsedGroupData);
  } catch (error) {
    console.warn(error);
  }
};
