import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import CharacterGroup from '../Learning/CharacterGroup';
import {defaultCharacterGroups} from './../../storage/defaultCharacterGroups';
import {getAllGroups, initData, getData} from '../../storage/asyncDataHandler';
import AsyncStorage from '@react-native-community/async-storage';
import {withNavigation} from 'react-navigation';

class LearnTab extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={defaultCharacterGroups}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('CharacterList', {
                  characterList: item.name,
                })
              }>
              <CharacterGroup name={item.name} />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

export default withNavigation(LearnTab);
