import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import {color} from './../../Styles/Color';

export default class CharacterGroup extends Component {
  navigationHandler = () => {
    this.props.onPress(this.props.characterListNumber);
  };
  render() {
    return (
      <View style={styles.characterGroupContainer}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={this.navigationHandler}>
          {this.props.name == 'Favorites' ? (
            <Icon name={'star-o'} type={'FontAwesome'} style={styles.icon} />
          ) : (
            <Text style={styles.displayCharacter}>
              {this.props.displayCharacter}
            </Text>
          )}

          <Text style={styles.characterGroupText}> {this.props.name} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    // borderWidth: 1,
  },
  icon: {
    fontSize: 120,
    color: color.tileIcon,
    flex: 1,
    // borderWidth: 1,
    flex: 7,
    textAlignVertical: 'center',
  },
  characterGroupText: {
    fontFamily: 'Lato',
    fontSize: 24,
    flex: 8,
    // borderWidth: 1,
    flex: 2,
    color: color.header,
  },
  displayCharacter: {
    fontFamily: 'Lato',
    fontSize: 110,
    flex: 8,
    // borderWidth: 1,
    flex: 7,
    textAlignVertical: 'center',
    color: color.header,
  },
  characterGroupContainer: {
    // borderWidth: 1,
    flex: 1,
    padding: 6,
    elevation: 7,
    backgroundColor: color.tiles,
    borderRadius: 15,
    margin: 6,
  },
});
