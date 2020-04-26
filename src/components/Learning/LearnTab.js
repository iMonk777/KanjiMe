import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import CharacterGroup from '../Learning/CharacterGroup';
import {defaultCharacterGroups} from './../../storage/defaultCharacterGroups';
import {getAllGroups, initData, getData} from '../../storage/asyncDataHandler';
import AsyncStorage from '@react-native-community/async-storage';
import {withNavigation} from 'react-navigation';

class LearnTab extends Component {
  render() {
    return (
      <View style={{padding: 4}}>
        <View style={styles.groupContainer}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() =>
              this.props.navigation.navigate('CharacterList', {
                characterList: defaultCharacterGroups[0].name,
              })
            }>
            <CharacterGroup name={'Hiragana'} displayCharacter={'あ'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() =>
              this.props.navigation.navigate('CharacterList', {
                characterList: defaultCharacterGroups[1].name,
              })
            }>
            <CharacterGroup name={'Katakana'} displayCharacter={'ア'} />
          </TouchableOpacity>
        </View>
        <View style={styles.groupContainer}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() =>
              this.props.navigation.navigate('CharacterList', {
                characterList: defaultCharacterGroups[2].name,
              })
            }>
            <CharacterGroup name={'Kanji'} displayCharacter={'字'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() =>
              this.props.navigation.navigate('CharacterList', {
                characterList: defaultCharacterGroups[3].name,
              })
            }>
            <CharacterGroup name={'Favorites'} displayCharacter={'F'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  groupContainer: {
    // borderWidth: 1,
    flexDirection: 'row',
    height: 200,
  },
  touchable: {flex: 1, padding: 4},
});
export default withNavigation(LearnTab);
