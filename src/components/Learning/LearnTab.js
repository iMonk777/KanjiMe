import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import CharacterGroup from '../Learning/CharacterGroup';
import {defaultCharacterGroups} from './../../storage/defaultCharacterGroups';
import {initData, getData} from './../../storage/initData';

export default class LearnTab extends Component {
  render() {
    if (getData('dataIsStored') == null) {
      initData();
    } else {
      console.warn('data is already stored');
    }
    // initData();
    // getData('Hiragana');
    return (
      <View>
        <FlatList
          data={defaultCharacterGroups}
          renderItem={({item}) => <CharacterGroup name={item.name} />}
        />
      </View>
    );
  }
}
