import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import {color} from './../../Styles/Color';

export default class CharacterGroup extends Component {
  render() {
    return (
      <View pressHandle={null} style={styles.characterGroupContainer}>
        <Text style={styles.characterGroupText}> {this.props.name} </Text>
        <Icon name={'right'} type={'AntDesign'} style={styles.icon} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  characterGroupContainer: {
    backgroundColor: color[0].tiles,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
    height: 54,
    alignItems: 'center',
    flexDirection: 'row',
    // elevation: 5,
  },
  icon: {
    fontSize: 32,
    color: color[0].tileIcon,
    flex: 1,
  },
  characterGroupText: {
    fontFamily: 'Lato',
    fontSize: 24,
    width: 173,
    flex: 8,
  },
});
