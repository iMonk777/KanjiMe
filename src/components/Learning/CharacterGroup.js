import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import {styles} from '../../Styles/Layout';

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
