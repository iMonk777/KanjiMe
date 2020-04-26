import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import {color} from './../../Styles/Color';

export default class CharacterGroup extends Component {
  render() {
    return (
      <View pressHandle={null} style={styles.characterGroupContainer}>
        {this.props.name == 'Favorites' ? (
          <Icon name={'star-o'} type={'FontAwesome'} style={styles.icon} />
        ) : (
          <Text style={styles.displayCharacter}>
            {this.props.displayCharacter}
          </Text>
        )}

        <Text style={styles.characterGroupText}> {this.props.name} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  characterGroupContainer: {
    backgroundColor: color.tiles,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 15,
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
});
