import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {color} from './../../Styles/Color';
import {withNavigation} from 'react-navigation';

class Tile extends Component {
  state = {
    face: this.props.name,
  };
  flipTile = () => {
    if (this.state.face === this.props.name) {
      this.setState({
        face: this.props.reading,
      });
    } else {
      this.setState({
        face: this.props.name,
      });
    }
  };
  showKanjiDetails = () => {
    this.props.navigation.navigate('KanjiDetailedView', {
      kanjiId: this.props.id,
      listType: this.props.type,
    });
  };
  render() {
    return (
      <View
        style={
          this.state.face == '' || this.props.id >= 2000
            ? styles.characterTilesBlank
            : styles.characterTiles
        }>
        <TouchableOpacity
          onPress={
            this.props.id >= 2000
              ? null
              : this.props.type == 'Kanji' || this.props.type == 'Favorites'
              ? this.showKanjiDetails
              : this.flipTile
          }
          style={styles.touchableStyle}>
          <Text
            style={
              this.state.face == this.props.reading
                ? styles.smallerFontSize
                : styles.characterGroupText
            }
            numberOfLines={1}>
            {this.state.face}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Tile);

const styles = StyleSheet.create({
  characterTiles: {
    flex: 1,
    margin: 5,
    aspectRatio: 1,
    borderRadius: 7,
    elevation: 5,
    backgroundColor: color.tiles,
  },
  characterTilesBlank: {
    flex: 1,
    margin: 5,
    aspectRatio: 1,
    opacity: 0,
  },
  touchableStyle: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterGroupText: {
    fontSize: 35,
    color: color.header,
  },
  smallerFontSize: {
    fontSize: 30,
  },
});
