import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import {defaultCharacterGroups} from './../../storage/defaultCharacterGroups';
import {color} from './../../Styles/Color';
import Tile from './Tile';
import AsyncStorage from '@react-native-community/async-storage';
import {kanjiData} from './../../storage/kanjiData';
import SearchAndFilters from './SearchAndFilters';
import {withNavigation} from 'react-navigation';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default class CharacterList extends Component {
  state = {
    tilecontent: 'name',
    favoriteKanjiList: null,
    isEmptyState: false,
    characters: null,
    gradeFilter: -1, // -1 means all grades
    meaningFilter: true,
    readingFilter: true,
    exampleFilter: false,
    searchTerm: null,
  };

  setGradeFilter = async grade => {
    await this.setState({
      gradeFilter: grade,
    });
    this.searchHandler(this.state.searchTerm ? this.state.searchTerm : -1);
  };

  setMeaningFilter = async () => {
    await this.setState({
      meaningFilter: !this.state.meaningFilter,
    });
    this.state.searchTerm ? this.searchHandler(this.state.searchTerm) : null;
  };

  setReadingFilter = async () => {
    await this.setState({
      readingFilter: !this.state.readingFilter,
    });
    this.state.searchTerm ? this.searchHandler(this.state.searchTerm) : null;
  };

  setExampleFilter = async () => {
    await this.setState({
      exampleFilter: !this.state.exampleFilter,
    });
    this.state.searchTerm ? this.searchHandler(this.state.searchTerm) : null;
  };

  searchHandler = term => {
    let foundcharacters = [];
    let lowerCaseTerm = String(term).toLowerCase();
    console.log(lowerCaseTerm);
    for (let i = 0; i < kanjiData.length; i++) {
      if (term === -1) {
        if (
          this.state.gradeFilter == -1 ||
          kanjiData[i].kgrade == this.state.gradeFilter
        ) {
          foundcharacters.push(kanjiData[i]);
        }
      } else if (
        (!!this.state.meaningFilter &&
          !!kanjiData[i].kmeaning &&
          (kanjiData[i].kmeaning.indexOf(lowerCaseTerm) !== -1 ||
            kanjiData[i].kmeaning.toLowerCase().indexOf(lowerCaseTerm) !==
              -1)) ||
        (this.state.readingFilter &&
          !!kanjiData[i].kunyomi &&
          kanjiData[i].kunyomi.indexOf(lowerCaseTerm) !== -1) ||
        (this.state.readingFilter &&
          !!kanjiData[i].onyomi &&
          kanjiData[i].onyomi.indexOf(lowerCaseTerm) !== -1) ||
        (this.state.exampleFilter &&
          !!kanjiData[i].examples &&
          (kanjiData[i].examples.indexOf(lowerCaseTerm) !== -1 ||
            kanjiData[i].examples.toLowerCase().indexOf(lowerCaseTerm) !== -1))
      ) {
        if (
          this.state.gradeFilter == -1 ||
          kanjiData[i].kgrade == this.state.gradeFilter
        ) {
          foundcharacters.push(kanjiData[i]);
        }
      }
    }

    if (foundcharacters.length !== 0) {
      let emptyTiles = [];
      for (let i = 0; i < 5 - ([...foundcharacters].length % 5); i++) {
        emptyTiles.push({id: 2000 + i});
      }
      foundcharacters = foundcharacters.concat(emptyTiles);

      this.setState({
        characters: [...foundcharacters],
        searchTerm: term,
      });
    } else {
      this.setState({
        characters: false,
        searchTerm: term,
      });
    }
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
      this.setState({favoriteKanjiList: favorites});
    }
  };

  async componentDidMount() {
    const {navigation} = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      this.onFocusHandler();
    });

    this.searchHandler(-1); // -1 means all grades
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  keyboardDismisser = () => {
    Keyboard.dismiss();
  };
  render() {
    return (
      <View style={styles.container}>
        {this.state.isEmptyState ? (
          <View>
            <Text style={styles.emptyStateText}>
              You have no favorite characters. To add a character head to the
              Kanji section and look for the pointy star.
            </Text>
            <Image
              style={styles.favoriteEmptyStateImage}
              source={require('../../storage/favoritesemptystate.jpg')}
            />
          </View>
        ) : (
          <View>
            {this.props.navigation.getParam('characterList') ===
            'Favorites' ? null : (
              <SearchAndFilters
                searchHandler={term => this.searchHandler(term)}
                gradeFilter={this.state.gradeFilter} // -1 means all grades
                meaningFilter={this.state.meaningFilter}
                exampleFilter={this.state.exampleFilter}
                readingFilter={this.state.readingFilter}
                setGradeFilter={grade => this.setGradeFilter(grade)}
                setMeaningFilter={this.setMeaningFilter}
                setReadingFilter={this.setReadingFilter}
                setExampleFilter={this.setExampleFilter}
                searchTerm={this.state.searchTerm}
              />
            )}
            {!!this.state.characters ? (
              <FlatList
                data={
                  this.props.navigation.getParam('characterList') ===
                  'Favorites'
                    ? this.state.favoriteKanjiList
                    : this.state.characters
                }
                columnWrapperStyle={styles.columnStyle}
                numColumns={5}
                onTouchStart={this.keyboardDismisser}
                keyboardShouldPersistTaps={'handled'}
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
            ) : (
              <Image
                style={styles.searchEmptyStateImage}
                source={require('../../storage/searchemptystate.png')}
              />
            )}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 2.5,
    paddingRight: 2.5,
    // paddingTop: Platform.OS == 'ios' ? getStatusBarHeight() : 2.5,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  columnStyle: {
    flex: 1,
    justifyContent: 'space-around',
  },
  emptyStateText: {
    // fontFamily: 'Lato',
    fontSize: 24,
    color: color.header,
    textAlign: 'justify',
    margin: 15,
    textAlignVertical: 'center',
  },
  favoriteEmptyStateImage: {
    height: '80%',
    width: '80%',
    alignSelf: 'center',
  },
  searchEmptyStateImage: {
    alignSelf: 'center',
    width: '90%',
    height: 400,
    resizeMode: 'contain',
  },
  searchInput: {
    width: '100%',
    borderWidth: 1,
    marginTop: 60,
  },
});
