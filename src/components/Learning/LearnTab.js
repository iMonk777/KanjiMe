import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import CharacterGroup from '../Learning/CharacterGroup';

export default class LearnTab extends Component {
  render() {
    let groupList = [
      {name: 'Hiragana', id: 1},
      {name: 'Katakana', id: 2},
      {name: 'Kanji', id: 3},
    ];
    return (
      <View>
        <FlatList
          data={groupList}
          renderItem={({item}) => <CharacterGroup name={item.name} />}
        />
      </View>
    );
  }
}
