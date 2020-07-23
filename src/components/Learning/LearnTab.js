import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import CharacterGroup from './CharacterGroup';
import {defaultCharacterGroups} from './../../storage/defaultCharacterGroups';
import {getAllGroups, initData, getData} from '../../storage/asyncDataHandler';
import AsyncStorage from '@react-native-community/async-storage';
import {withNavigation} from 'react-navigation';
import KanjiOfTheDay from './KanjiOfTheDay';
import CreditsButton from './CreditsButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {getStatusBarHeight} from 'react-native-status-bar-height';

class LearnTab extends Component {
  navigateToCharacterlist = charList => {
    this.props.navigation.navigate('CharacterList', {
      characterList: defaultCharacterGroups[charList].name,
    });
  };

  navigateToCredits = () => {
    this.props.navigation.navigate('Credits');
  };

  storeData = async (name, value) => {
    try {
      await AsyncStorage.setItem(name, value);
    } catch (e) {
      console.log(e);
    }
  };

  getFavorites = async () => {
    try {
      const favoriteKanjiList = await AsyncStorage.getItem('favoriteKanjiList');
      return favoriteKanjiList;
    } catch (e) {
      console.log(e);
    }
  };

  getTraning = async () => {
    try {
      const didShowTraining = await AsyncStorage.getItem('didShowTraining');
      return didShowTraining;
    } catch (e) {
      console.log(e);
    }
  };

  async componentDidMount() {
    const favorites = await this.getFavorites();
    if (favorites === null) {
      this.storeData('favoriteKanjiList', '[]');
    }
    const didShowTraining = await this.getTraning();
    if (didShowTraining === null) {
      this.props.navigation.navigate('UserUITraining');
      this.storeData('didShowTraining', 'true');
    }
  }

  render() {
    return (
      <View
        style={{
          padding: 6,
          paddingTop: Platform.OS == 'ios' ? getStatusBarHeight() : 0,
          flex: 1,
        }}>
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
        <View style={{flex: 1, padding: 6}}>
          <CreditsButton onPressHandler={this.navigateToCredits} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  groupContainer: {
    flexDirection: 'row',
    height: wp('48%'),
  },
  touchable: {flex: 1, padding: 6},
});
export default withNavigation(LearnTab);
