import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import {color} from '../../Styles/Color';
import {styles} from '../../Styles/Layout';

// console.warn(color);
export default class CharacterGroup extends Component {
  render() {
    // console.warn(color[0].tilesIcon);
    return (
      <View pressHandle={null} style={styles.characterGroup}>
        <Text> Hiragana </Text>
        <Icon name={'right'} type={'AntDesign'} style={styles.icon} />
      </View>
    );
  }
}
