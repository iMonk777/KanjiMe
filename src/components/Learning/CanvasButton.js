import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {color} from '../../Styles/Color';
import {Icon} from 'native-base';

export default class CanvasButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          flex: this.props.size,
          margin: 4,
          height: 60,
          borderRadius: 16,
          backgroundColor: color.tiles,
          padding: 8,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 2,
        }}
        onPress={this.props.onPress}>
        <Icon
          name={this.props.iconName}
          type={this.props.iconType}
          style={styles.practiceButtonIcon}
        />
        <Text style={styles.practiceButtonText}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  practiceButton: {
    flex: 1,
    margin: 4,
    minHeight: 60,
    borderRadius: 16,
    backgroundColor: color.tiles,
    padding: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  practiceButtonText: {
    color: color.header,
    fontWeight: 'bold',
  },
  practiceButtonIcon: {
    alignSelf: 'center',
    fontSize: 30,
    color: color.header,
  },
});
