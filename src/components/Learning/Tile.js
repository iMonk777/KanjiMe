import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {color} from './../../Styles/Color';

export default class Tile extends Component {
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
    console.log(this.state.face);
  };
  render() {
    return (
      <View
        style={
          this.state.face == ''
            ? styles.characterTilesBlank
            : styles.characterTiles
        }>
        <TouchableOpacity onPress={this.flipTile} style={styles.touchableStyle}>
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

const styles = StyleSheet.create({
  characterTiles: {
    flex: 1,
    margin: 5,
    aspectRatio: 1,
    borderRadius: 7,
    elevation: 5,
    backgroundColor: color[0].tiles,
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
    fontSize: 30,
  },
  smallerFontSize: {
    fontSize: 30,
  },
});