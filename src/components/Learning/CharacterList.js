import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {defaultCharacterGroups} from './../../storage/defaultCharacterGroups';
import {color} from './../../Styles/Color';
import Tile from './Tile';
import AsyncStorage from '@react-native-community/async-storage';
import {kanjiData} from './../../storage/kanjiData';
import {withNavigation} from 'react-navigation';

export default class CharacterList extends Component {
  state = {
    tilecontent: 'name',
    favoriteKanjiList: null,
    isEmptyState: false,
  };

  getFavorites = async () => {
    try {
      const favoriteKanjiList = await AsyncStorage.getItem('favoriteKanjiList');
      const parsedFavoriteKanjiList = JSON.parse(favoriteKanjiList);
      let favorites = [];
      for (let i = 0; i < parsedFavoriteKanjiList.length; i++) {
        favorites.push(kanjiData[parsedFavoriteKanjiList[i]]);
      }

      return favorites;
    } catch (e) {
      console.log(e);
    }
  };

  onFocusHandler = async () => {
    let favorites = await this.getFavorites();
    console.log(favorites);
    console.log(favorites.length);
    if (favorites) {
      let emptyTiles = [];
      for (let i = 0; i < 5 - ([...favorites].length % 5); i++) {
        emptyTiles.push({id: 2000 + i});
      }
      favorites = favorites.concat(emptyTiles);
      if (
        emptyTiles.length === 5 &&
        favorites.length === 5 &&
        this.props.navigation.getParam('characterList') === 'Favorites'
      ) {
        this.setState({
          isEmptyState: true,
        });
      }
      // console.warn(this.state.isEmptyState);
      console.log(favorites);
      this.setState({favoriteKanjiList: favorites});
      // console.warn('Component Moutedddd');
    }
    // console.warn('Charlist focused');
  };

  async componentDidMount() {
    const {navigation} = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      this.onFocusHandler();
    });
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  render() {
    let characterss = defaultCharacterGroups.filter(obj => {
      return (
        obj.name ==
        this.props.navigation.getParam('characterList', 'defaultValue')
      );
    })[0].characters;

    return (
      <View style={styles.container}>
        {this.state.isEmptyState ? (
          <View>
            <Text style={styles.emptyStateText}>
              You have no favorite characters. To add a character head to the
              Kanji section and look for the pointy star.
            </Text>
            <Image
              style={styles.emptyStateImage}
              source={require('../../storage/emptystate.jpg')}
            />
          </View>
        ) : (
          <FlatList
            data={
              this.props.navigation.getParam('characterList') === 'Favorites'
                ? this.state.favoriteKanjiList
                : characterss
            }
            columnWrapperStyle={styles.columnStyle}
            numColumns={5}
            renderItem={({item}) => (
              <Tile
                name={item.name}
                id={item.id}
                reading={item.reading}
                type={this.props.navigation.getParam(
                  'characterList',
                  'defaultValue',
                )}
              />
            )}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 2.5,
    paddingRight: 2.5,
    paddingTop: 2.5,
    flex: 1,
    // borderWidth: 5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  columnStyle: {
    flex: 1,
    justifyContent: 'space-around',
  },
  emptyStateText: {
    fontFamily: 'Lato',
    fontSize: 24,
    color: color.header,
    textAlign: 'justify',
    margin: 15,
    // borderWidth: 5,
    textAlignVertical: 'center',
  },
  emptyStateImage: {
    // resizeMode: 'contain',
    height: '80%',
    width: '80%',
    alignSelf: 'center',
    // borderWidth: 5,
    // borderColor: 'red',
    // borderRadius: 70,
  },
});

// this.props.navigation.getParam('characterList', 'defaultValue')
