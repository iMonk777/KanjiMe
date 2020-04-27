import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import CharacterGroup from './CharacterGroup';
import {defaultCharacterGroups} from './../../storage/defaultCharacterGroups';
import {getAllGroups, initData, getData} from '../../storage/asyncDataHandler';
import AsyncStorage from '@react-native-community/async-storage';
import {withNavigation} from 'react-navigation';
import KanjiOfTheDay from './KanjiOfTheDay';

class LearnTab extends Component {
  navigateToCharacterlist = charList => {
    this.props.navigation.navigate('CharacterList', {
      characterList: defaultCharacterGroups[charList].name,
    });
  };

  render() {
    return (
      <View style={{padding: 6}}>
        <View style={styles.groupContainer}>
          <CharacterGroup
            name={'Hiragana'}
            displayCharacter={'あ'}
            onPress={this.navigateToCharacterlist}
            characterListNumber={0}
          />
          <CharacterGroup
            name={'Katakana'}
            displayCharacter={'ア'}
            onPress={this.navigateToCharacterlist}
            characterListNumber={1}
          />
        </View>
        <View style={styles.groupContainer}>
          <CharacterGroup
            name={'Kanji'}
            displayCharacter={'字'}
            onPress={this.navigateToCharacterlist}
            characterListNumber={2}
          />
          <CharacterGroup
            name={'Favorites'}
            displayCharacter={'F'}
            onPress={this.navigateToCharacterlist}
            characterListNumber={3}
          />
        </View>
        <KanjiOfTheDay />
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
  touchable: {flex: 1, padding: 6},
});
export default withNavigation(LearnTab);
